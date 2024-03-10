import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  name: string;

  @Field(() => GraphQLISODateTime)
  createdAt!: Date;
}
