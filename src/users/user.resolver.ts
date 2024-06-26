import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { NotFoundException } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User)
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<User> {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return await this.userService.create(createUserInput);
  }

  @Mutation(() => User)
  async removeUser(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<DeleteResult> {
    return await this.userService.remove(id);
  }

  @Mutation(() => User)
  async addUserToMeetup(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('meetupId', { type: () => Int }) meetupId: number,
  ): Promise<User> {
    return await this.userService.addUserToMeetup(userId, meetupId);
  }
}
