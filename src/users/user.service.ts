import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { Meetup } from '../meetups/entities/meetup.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Meetup)
    private readonly meetupRepository: Repository<Meetup>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  create(createUserInput: CreateUserInput): Promise<User> {
    return this.userRepository.save(createUserInput);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }

  async addUserToMeetup(userId: number, meetupId: number) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['meetups'],
    });

    if (!user) {
      throw new Error('User not found');
    }

    const meetups = await this.meetupRepository.findOneBy({ id: meetupId });

    user.meetups.push(meetups);

    return this.userRepository.save(user);
  }
}
