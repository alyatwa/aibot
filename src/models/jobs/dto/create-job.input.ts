import { InputType, Field } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';

@InputType()
export class CreateJobInput {
  @Field(() => GraphQLString, { description: 'Job name' })
  name: string;
}
