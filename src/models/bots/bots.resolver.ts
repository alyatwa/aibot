import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../users/entities/user.entity';
import { Bot } from './entities/bot.entity';
import { BotsService } from './bots.service';

@Resolver(() => Bot)
export class BotsResolver {
  constructor(private readonly botsService: BotsService) {}

  @Query(() => Bot)
  async bot() {
    // let's fetch the first bot available in the database
    const bots = await this.botsService.findAll();
    return bots.length > 0 ? bots[0] : null;
  }

  @Mutation(() => Bot)
  createBot(@Args('title') title: string, @Args('userId') userId: string) {
    return this.botsService.createBot(title, userId);
  }

  @ResolveField(() => [User])
  user(@Parent() bot: Bot) {
    return this.botsService.botUser(bot.id);
  }
}
