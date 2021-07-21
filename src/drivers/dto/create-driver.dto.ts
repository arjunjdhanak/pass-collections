import { Role } from 'src/auth/roles.enum';

export class CreateDriverDto {
  readonly username: string;
  readonly password: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly mobileNumber: number;
  readonly profilePicture: string;
  readonly slots: object;
  readonly role: Role;
}
