import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AdminAuthService } from '../admin-auth.service';

import { RepresentativeAuthService } from '../representative-auth.service';

@Injectable()
export class RepresentativeLocalStrategy extends PassportStrategy(
  Strategy,
  'representative',
) {
  constructor(
    private readonly representativeauthService: RepresentativeAuthService,
  ) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.representativeauthService.validateUser(
      username,
      password,
    );
    console.log('rep local strategy user: ', user);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
