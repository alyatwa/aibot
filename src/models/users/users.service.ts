import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(newUser: CreateUserInput) {
    const user = this.usersRepository.create(newUser);
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
