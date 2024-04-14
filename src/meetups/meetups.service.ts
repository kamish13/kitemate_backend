import { Injectable } from '@nestjs/common';
import { CreateMeetupInput } from './dto/create-meetup.input';
import { UpdateMeetupInput } from './dto/update-meetup.input';
import { Meetup } from './entities/meetup.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class MeetupsService {
  constructor(
    @InjectRepository(Meetup)
    private readonly meetupRepository: Repository<Meetup>,
  ) {}
  create(createMeetupInput: CreateMeetupInput): Promise<Meetup> {
    return this.meetupRepository.save(createMeetupInput);
  }

  findAll(): Promise<Meetup[]> {
    return this.meetupRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} meetup`;
  }

  update(id: number, updateMeetupInput: UpdateMeetupInput) {
    return `This action updates a #${id} meetup`;
  }

  remove(id: number) {
    return `This action removes a #${id} meetup`;
  }
}
