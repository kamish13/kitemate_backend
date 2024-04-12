import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Username' })
  username: string;

  @Field(() => String, { description: 'Name' })
  name: string;

  @Field(() => String, { description: 'Email' })
  email: string;

  @Field(() => String, { description: 'Emergency Contact' })
  emergencyContact: string;

  @Field(() => String, { description: 'Description' })
  description: string;
}
