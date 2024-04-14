import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';

@ObjectType('Meetup')
@Entity()
export class Meetup {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  // meetup start time
  @Field(() => Date)
  @Column({
    type: 'timestamp with time zone',
  })
  startTime: Date;

  // meetup end time (optional)
  @Field(() => Date)
  @Column({
    type: 'timestamp with time zone',
  })
  endTime: Date;

  // meetup location (pin on the map)
  @Field(() => [Float], { nullable: true })
  @Column('float', { array: true, nullable: true })
  location: [number, number];

  // meetup description
  @Field(() => String)
  @Column({ type: 'text' })
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

  @ManyToMany(() => User, (user) => user.meetups, {})
  users?: User[];
}
