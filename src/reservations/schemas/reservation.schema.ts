import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReservationDocument = Reservation & Document;

@Schema()
export class Reservation {
  @Prop()
  orderId: string;

  @Prop()
  userId: string;

  @Prop()
  email: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  mobileNumber: number;

  @Prop({ type: Object })
  orderItems: Object;

  @Prop()
  timestamp: string;

  @Prop({ type: Object })
  address: Object;

  @Prop([String])
  videos: string[];

  @Prop([String])
  images: string[];
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
