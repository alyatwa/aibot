import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Job } from './entities/job.entity';
import { JobsService } from './jobs.service';
import { CreateJobInput } from './dto/create-job.input';
import { Bot } from '../bots/entities/bot.entity';

@Resolver(() => Job)
export class JobsResolver {
  constructor(private readonly jobsService: JobsService) {}

  @Query(() => Job)
  async job() {
    // let's fetch the first job available in the database
    const jobs = await this.jobsService.findAll();
    return jobs.length > 0 ? jobs[0] : null;
  }

  @Mutation(() => Job)
  createJob(@Args('newJobData') newJobData: CreateJobInput) {
    return this.jobsService.createJob(newJobData);
  }

  @ResolveField(() => [Bot])
  bot(@Parent() job: Bot) {
    return this.jobsService.jobBot(job.id);
  }
}
