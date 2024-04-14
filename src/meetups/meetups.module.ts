import { Module } from '@nestjs/common';
import { MeetupsService } from './meetups.service';
import { MeetupsResolver } from './meetups.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meetup } from './entities/meetup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Meetup])],
  providers: [MeetupsResolver, MeetupsService],
})
export class MeetupsModule {}
