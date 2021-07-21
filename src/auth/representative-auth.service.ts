import { Injectable } from '@nestjs/common';
import { RepresentativesService } from '../representatives/representatives.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RepresentativeAuthService {
  constructor(
    private readonly representativeService: RepresentativesService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.representativeService.findOne(username);
    console.log('REp suth service user:', user);
    if (user && user['password'] === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async authLogin(user: any) {
    const payload = {
      username: user.username,
      id: user._id,
      role: user.role,
    };
    console.log('rep payload:', payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
