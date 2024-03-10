import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './entities/job.entity';
import { CreateJobInput } from './dto/create-job.input';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private readonly jobsRepository: Repository<Job>,
  ) {}

  createJob(data: CreateJobInput) {
    const job = this.jobsRepository.create(data);

    return this.jobsRepository.save(job);
  }

  findAllByBot(botId: string): Promise<Job[]> {
    return this.jobsRepository.find({
      where: {
        bot: {
          id: botId,
        },
      },
    });
  }

  async findAll(): Promise<Job[]> {
    return await this.jobsRepository.find();
  }

  async jobBot(botId: string) {
    const job = await this.jobsRepository.findOne({
      where: {
        id: botId,
      },
      relations: {
        bot: true,
      },
    });

    return job.bot;
  }
}
