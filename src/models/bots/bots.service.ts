import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bot } from './entities/bot.entity';
import { CreateBotInput } from './dto/create-bot.input';

@Injectable()
export class BotsService {
  constructor(
    @InjectRepository(Bot)
    private readonly botsRepository: Repository<Bot>,
  ) {}

  createBot(data: CreateBotInput) {
    const bot = this.botsRepository.create(data);

    return this.botsRepository.save(bot);
  }

  findAllByUser(userId: string): Promise<Bot[]> {
    return this.botsRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
    });
  }

  async findAll(): Promise<Bot[]> {
    return await this.botsRepository.find();
  }

  async botUser(botId: string) {
    const bot = await this.botsRepository.findOne({
      where: {
        id: botId,
      },
      relations: {
        user: true,
      },
    });

    return bot.user;
  }
}
