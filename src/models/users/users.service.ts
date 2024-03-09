import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(name: string) {
    const user = this.usersRepository.create({ name, bots: [] });
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async userBots(userId: string) {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
      relations: { bots: true },
    });

    return user.bots;
  }
}
