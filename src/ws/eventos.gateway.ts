import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayInit,
} from '@nestjs/websockets';

@WebSocketGateway({ namespace: 'events' })
export class evGateway implements OnGatewayInit {
  constructor() {}

  afterInit(server: any) {
    console.log(server);
  }

  @SubscribeMessage('events')
  handleEvent(@MessageBody('id') id: number): number {
    // id === messageBody.id
    return id;
  }
}
