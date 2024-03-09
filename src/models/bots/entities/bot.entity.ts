import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { User } from 'src/models/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Bot {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field({ name: 'bot name', description: 'Bot name', nullable: false })
  name: string;

  @Field(() => GraphQLISODateTime)
  createdAt!: Date;

  @ManyToOne(() => User)
  @JoinColumn()
  @Field(() => User)
  user: User;
}
