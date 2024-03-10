import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskInput } from './dto/create-task.input';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}

  create(newTask: CreateTaskInput) {
    const task = this.tasksRepository.create(newTask);
    return this.tasksRepository.save(task);
  }

  findAll() {
    return this.tasksRepository.find();
  }
}
