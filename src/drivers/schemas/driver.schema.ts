import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/auth/roles.enum';

export type DriverDocument = Driver & Document;

@Schema()
export class Driver {
  @Prop({
    type: String,
    unique: true,
  })
  username: string;

  @Prop()
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
  profilePicture: string;

  @Prop({ type: Object })
  slots: object;

  @Prop({ type: String, enum: Role, default: Role.driver })
  role: Role;
}

export const DriverSchema = SchemaFactory.createForClass(Driver);
