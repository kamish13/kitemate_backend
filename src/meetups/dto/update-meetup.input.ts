import { CreateMeetupInput } from './create-meetup.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMeetupInput extends PartialType(CreateMeetupInput) {
  @Field(() => Int)
  id: number;
}
