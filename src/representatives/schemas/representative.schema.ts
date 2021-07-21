import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/auth/roles.enum';

export type RepresentativeDocument = Representative & Document;

@Schema()
export class Representative {
  @Prop({
    type: String,
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

  @Prop({ type: Object })
  referrals: object;

  @Prop({ type: Object })
  referralOrders: object;

  @Prop()
  univocalCode: string;

  @Prop()
  commissionPercentage: number;

  @Prop({ type: String, enum: Role, default: Role.representative })
  role: Role;
}

export const RepresentativeSchema =
  SchemaFactory.createForClass(Representative);
