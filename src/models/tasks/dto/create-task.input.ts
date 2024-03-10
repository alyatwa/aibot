import { InputType, Field } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';

@InputType()
export class CreateTaskInput {
  @Field(() => GraphQLString, { description: 'Task name' })
  name: string;

  @Field(() => GraphQLString, { description: 'Task description' })
  description: string;
}
