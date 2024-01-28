import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Event } from '../events/event.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  emergencyContact: string;
  @Column()
  description: string;

  @ManyToMany(() => Event, (event) => event.users, { cascade: true })
  @JoinTable()
  events: Event[];
}
