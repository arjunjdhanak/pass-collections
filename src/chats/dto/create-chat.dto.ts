import { Role } from 'src/auth/roles.enum';

export class CreateChatDto {
  readonly username: string;
  readonly role: Role;
  readonly from: string;
  readonly to: string;
  readonly timestamp: string;
}
