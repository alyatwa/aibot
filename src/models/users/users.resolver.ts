import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Bot } from '../bots/entities/bot.entity';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  users() {
    return this.usersService.findAll();
  }

  @Mutation(() => User)
  createUser(@Args('name') name: string) {
    return this.usersService.create(name);
  }

  @ResolveField(() => [Bot])
  bots(@Parent() user: User) {
    return this.usersService.userBots(user.id);
  }
}
