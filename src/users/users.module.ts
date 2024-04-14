import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { Meetup } from '../meetups/entities/meetup.entity';
import { MeetupsService } from '../meetups/meetups.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Meetup])],
  providers: [UserResolver, UserService, MeetupsService],
})
export class UsersModule {}
