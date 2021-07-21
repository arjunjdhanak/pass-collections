import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { Chat } from './schemas/chat.schema';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Post()
  async create(@Body() createChatDto: CreateChatDto) {
    await this.chatsService.create(createChatDto);
  }

  @Get()
  async findAll(): Promise<Chat[]> {
    return this.chatsService.findAll();
  }
}
