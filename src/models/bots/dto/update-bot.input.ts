import { GraphQLString } from 'graphql';
import { CreateBotInput } from './create-bot.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBotInput extends PartialType(CreateBotInput) {
  @Field(() => GraphQLString)
  id: string;
}
