import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/auth/roles.enum';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop({
    unique: true,
  })
  username: string;

  @Prop({ length: 50 })
  password: string;

  @Prop()
  email: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  mobileNumber: number;

  @Prop()
  vehicles: string[];

  @Prop({ type: Object })
  address: Object;

  @Prop({ type: String, enum: Role, default: Role.customer })
  role: Role;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
