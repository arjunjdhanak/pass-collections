import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { CustomerAuthService } from '../customer-auth.service';

@Injectable()
export class CustomerLocalStrategy extends PassportStrategy(
  Strategy,
  'customer',
) {
  constructor(private readonly customerauthService: CustomerAuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.customerauthService.validateUser(
      username,
      password,
    );
    console.log('cust local strat user:', user);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
