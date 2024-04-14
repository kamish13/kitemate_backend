import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateMeetupInput {
  @Field(() => Date, { description: 'Meetup start time' })
  startTime: Date;

  @Field(() => Date, { description: 'Meetup end time (optional)' })
  endTime: Date;

  @Field(() => [Float], {
    description: 'Meetup location (latitude, longitude)',
    nullable: true, // Make the field nullable
  })
  location: [number, number];

  @Field(() => String, { description: 'Meetup description' })
  description: string;
}
