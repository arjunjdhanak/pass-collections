import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/auth/roles.enum';

export type ChatDocument = Chat & Document;

@Schema()
export class Chat {
  @Prop()
  username: string;

  @Prop({ type: String, enum: Role, required: true })
  role: Role;

  @Prop()
  from: string;

  @Prop()
  to: string;

  @Prop()
  timestamp: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
