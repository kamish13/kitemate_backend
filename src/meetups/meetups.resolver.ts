import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MeetupsService } from './meetups.service';
import { Meetup } from './entities/meetup.entity';
import { CreateMeetupInput } from './dto/create-meetup.input';
import { UpdateMeetupInput } from './dto/update-meetup.input';

@Resolver(() => Meetup)
export class MeetupsResolver {
  constructor(private readonly meetupsService: MeetupsService) {}

  @Mutation(() => Meetup)
  createMeetup(
    @Args('createMeetupInput') createMeetupInput: CreateMeetupInput,
  ) {
    return this.meetupsService.create(createMeetupInput);
  }

  @Query(() => [Meetup], { name: 'meetups' })
  findAll() {
    return this.meetupsService.findAll();
  }

  @Query(() => Meetup, { name: 'meetup' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.meetupsService.findOne(id);
  }

  @Mutation(() => Meetup)
  updateMeetup(
    @Args('updateMeetupInput') updateMeetupInput: UpdateMeetupInput,
  ) {
    return this.meetupsService.update(updateMeetupInput.id, updateMeetupInput);
  }

  @Mutation(() => Meetup)
  removeMeetup(@Args('id', { type: () => Int }) id: number) {
    return this.meetupsService.remove(id);
  }
}
