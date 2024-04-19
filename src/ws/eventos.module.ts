import { Module } from '@nestjs/common';
import { evGateway } from './eventos.gateway';

@Module({
  providers: [evGateway],
})
export class EventsModule {}
