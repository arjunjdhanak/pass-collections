import { Body, Controller, Get, Post } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { Subscription } from './schemas/subscription.schema';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Post()
  async create(@Body() createSubscriptionDto: CreateSubscriptionDto) {
    await this.subscriptionsService.create(createSubscriptionDto);
  }

  @Get()
  async findAll(): Promise<Subscription[]> {
    return this.subscriptionsService.findAll();
  }
}
