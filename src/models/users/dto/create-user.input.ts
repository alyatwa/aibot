import { InputType, Field } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';

@InputType()
export class CreateUserInput {
  @Field(() => GraphQLString, { description: 'User name' })
  name: string;

  @Field(() => GraphQLString, { description: 'User Email' })
  email: string;

  @Field(() => GraphQLString, { description: 'User Password' })
  password: string;
}
