import { Injectable } from '@nestjs/common';
import { CustomersService } from '../customers/customers.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CustomerAuthService {
  constructor(
    private readonly customerService: CustomersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.customerService.findOne(username);
    console.log('customer auth validate user');
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
