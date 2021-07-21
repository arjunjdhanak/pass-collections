import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CustomerAuthGuard } from 'src/auth/guards/customer-auth.guard';
import { CustomersService } from './customers.service';
import { CustomerAuthService } from './../auth/customer-auth.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './schemas/customer.schema';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/auth/roles.enum';

@Controller('customer')
export class CustomersController {
  constructor(
    private readonly customersService: CustomersService,
    private readonly authService: CustomerAuthService,
  ) {}

  @Post('register')
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    await this.customersService.create(createCustomerDto);
  }

  @UseGuards(CustomerAuthGuard)
  @Post('login')
  async authLogin(@Request() req) {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    return this.authService.authLogin(req.user._doc);
  }

  @Roles(Role.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('findAll')
  async findAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }
}
