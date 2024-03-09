import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bot } from './entities/bot.entity';

@Injectable()
export class BotsService {
  constructor(
    @InjectRepository(Bot)
    private readonly botsRepository: Repository<Bot>,
  ) {}

  createBot(name: string, userId: string) {
    const bot = this.botsRepository.create({
      name,
      user: {
        id: userId,
      },
    });

    return this.botsRepository.save(bot);
  }

  findAllByAuthor(userId: string): Promise<Bot[]> {
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

  async botUser(postId: string) {
    const post = await this.botsRepository.findOne({
      where: {
        id: postId,
      },
      relations: {
        user: true,
      },
    });

    return post.user;
  }
}
