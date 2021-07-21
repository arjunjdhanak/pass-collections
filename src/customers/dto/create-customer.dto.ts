import { Role } from 'src/auth/roles.enum';

export class CreateCustomerDto {
  readonly username: string;
  readonly password: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly mobileNumber: number;
  readonly vehicles: string[];
  readonly address: Object;
  readonly role: Role;
}
