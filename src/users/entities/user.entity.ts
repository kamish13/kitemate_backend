import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Event } from '../events/event.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@ObjectType('User')
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  username: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @IsEmail()
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  emergencyContact: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => Date)
  @CreateDateColumn({
    type: 'timestamp with time zone',
  })
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn({
    type: 'timestamp with time zone',
  })
  updatedAt: Date;

  @ManyToMany(() => Event, (event) => event.users, { cascade: true })
  @JoinTable()
  events: Event[];
}
