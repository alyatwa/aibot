import { Module } from '@nestjs/common';
import { BotsService } from './bots.service';
import { BotsResolver } from './bots.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bot } from './entities/bot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bot])],
  providers: [BotsResolver, BotsService],
})
export class BotsModule {}
