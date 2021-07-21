import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { DriverAuthService } from 'src/auth/driver-auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RepresentativeAuthGuard } from 'src/auth/guards/representative-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/auth/roles.enum';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { Driver } from './schemas/driver.schema';

@Controller('driver')
export class DriversController {
  constructor(
    private readonly driversService: DriversService,
    private readonly authService: DriverAuthService,
  ) {}

  @Roles(Role.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('register')
  async create(@Body() createDriverDto: CreateDriverDto) {
    await this.driversService.create(createDriverDto);
  }

  @UseGuards(RepresentativeAuthGuard)
  @Post('login')
  async authLogin(@Request() req) {
    return this.authService.authLogin(req.user._doc);
  }

  @Roles(Role.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('findAll')
  async findAll(): Promise<Driver[]> {
    return this.driversService.findAll();
  }
}
