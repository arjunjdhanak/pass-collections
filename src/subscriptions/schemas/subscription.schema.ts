import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubscriptionDocument = Subscription & Document;

@Schema()
export class Subscription {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  totalRides: number;

  @Prop()
  maxkm: number;

  @Prop()
  maxkmExceededRate: number;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
