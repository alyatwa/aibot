import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Bot } from 'src/models/bots/entities/bot.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Bot, (bot) => bot.user)
  @Field(() => [Bot])
  bots: Bot[];
}
