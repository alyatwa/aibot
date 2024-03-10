import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { Bot } from 'src/models/bots/entities/bot.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Job {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field({ name: 'job name', description: 'Job name', nullable: false })
  name: string;

  @Column({ enum: ['running', 'stopped', 'paused'] })
  @Field(() => String, {
    name: 'job status',
    description: 'Job status',
    nullable: false,
  })
  status: 'running' | 'stopped' | 'paused';

  @Field(() => GraphQLISODateTime)
  createdAt!: Date;

  @ManyToOne(() => Bot)
  @JoinColumn()
  @Field(() => Bot)
  bot: Bot;
}
