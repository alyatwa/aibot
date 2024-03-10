import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsResolver } from './jobs.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './entities/job.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Job])],
  providers: [JobsResolver, JobsService],
})
export class JobsModule {}
