import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/auth/roles.enum';

export type AdminDocument = Admin & Document;

@Schema()
export class Admin {
  @Prop({
    type: String,
    unique: true,
  })
  username: string;

  @Prop()
  password: string;

  @Prop({ type: String, enum: Role, default: Role.admin })
  role: Role;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
