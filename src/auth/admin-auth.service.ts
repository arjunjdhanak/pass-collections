import { Injectable } from '@nestjs/common';
import { AdminsService } from '../admins/admins.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminAuthService {
  constructor(
    private readonly adminService: AdminsService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.adminService.findOne(username);
    console.log('admin auth validate user');
    if (user && user['password'] === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async authLogin(user: any) {
    console.log('admin authlogin');
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
