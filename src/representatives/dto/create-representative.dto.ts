import { Role } from 'src/auth/roles.enum';

export class CreateRepresentativeDto {
  readonly username: string;
  readonly password: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly mobileNumber: number;
  // referral userid
  readonly referrals: object;
  // referral user orders
  readonly referralOrders: object;
  readonly univocalCode: string;
  readonly commissionPercentage: number;
  readonly role: Role;
}
