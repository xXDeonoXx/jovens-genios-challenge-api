import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Namespace, Socket } from 'socket.io';
import { Topic } from './entities/topic.entity';
import { TopicsService } from './topics.service';

@WebSocketGateway({ namespace: 'topics', cors: { origin: '*' } })
export class TopicsGateway implements OnGatewayConnection {
  constructor(private readonly topicsService: TopicsService) {}

  @WebSocketServer() io: Namespace;

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`WS Client with id: ${client.id}`);
    this.updateClientTopicsList(client);
  }

  async updateClientTopicsList(client: Socket) {
    const topics = await this.topicsService.findAll();
    client.emit('UpdateTopicsList', topics);
  }

  @SubscribeMessage('NewTopic')
  async handleNewTopicEvent(
    @MessageBody() body: { name: string },
  ): Promise<Topic> {
    console.log(body);
    const newTopic = await this.topicsService.create(body);
    const topics = await this.topicsService.findAll();
    this.io.emit('UpdateTopicsList', topics);
    return newTopic;
  }

  @SubscribeMessage('GetTopicsList')
  async handleGetTopicsListEvent(): Promise<Topic[]> {
    return await this.topicsService.findAll();
  }
}
