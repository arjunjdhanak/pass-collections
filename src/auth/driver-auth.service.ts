import { Injectable } from '@nestjs/common';
import { DriversService } from '../drivers/drivers.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class DriverAuthService {
  constructor(
    private readonly driverService: DriversService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.driverService.findOne(username);
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
    console.log(payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
