import { InputType, Field } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';

@InputType()
export class CreateBotInput {
  @Field(() => GraphQLString, { description: 'Bot name' })
  name: string;
}
