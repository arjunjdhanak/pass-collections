import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AdminAuthService } from '../admin-auth.service';
import { DriverAuthService } from '../driver-auth.service';

@Injectable()
export class DriverLocalStrategy extends PassportStrategy(Strategy, 'driver') {
  constructor(private readonly driverauthService: AdminAuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.driverauthService.validateUser(username, password);
    console.log('driver local strategy user:', user);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
