import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Task } from './entities/task.entity';
import { TasksService } from './tasks.service';
import { CreateTaskInput } from './dto/create-task.input';

@Resolver(() => Task)
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Query(() => [Task])
  tasks() {
    return this.tasksService.findAll();
  }

  @Mutation(() => Task)
  createTask(@Args('newTask') newTask: CreateTaskInput) {
    return this.tasksService.create(newTask);
  }
}
