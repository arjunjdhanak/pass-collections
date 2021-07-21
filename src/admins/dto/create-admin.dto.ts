import { Role } from 'src/auth/roles.enum';

export class CreateAdminDto {
  readonly username: string;
  readonly password: string;
  readonly role: Role;
}
