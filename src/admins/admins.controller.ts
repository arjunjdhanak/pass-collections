import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { AdminAuthService } from './../auth/admin-auth.service';
import { AdminAuthGuard } from './../auth/guards/admin-auth.guard';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/roles.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { HttpException } from '@nestjs/common';
import { Admin } from './schemas/admin.schema';
import { ObjectId } from 'mongoose';

@Controller('admin')
export class AdminsController {
  constructor(
    private readonly adminsService: AdminsService,
    private readonly authService: AdminAuthService,
  ) {}

  @Roles(Role.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('register')
  async create(@Body() createAdminDto: CreateAdminDto) {
    try {
      let response = await this.adminsService.create(createAdminDto);
      return response;
    } catch (e) {
      console.log(e);
      throw new HttpException(
        {
          status: 403,
          error: 'Username already exists',
        },
        403,
      );
    }
  }

  @Roles(Role.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('findAll')
  async findAll(): Promise<any> {
    return this.adminsService.findAll();
  }

  @UseGuards(AdminAuthGuard)
  @Post('login')
  async authLogin(@Request() req) {
    return this.authService.authLogin(req.user._doc);
  }

  @Roles(Role.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Roles(Role.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('update/:id')
  update(@Body() updateAdminDto: Object, @Param() params): Promise<Admin> {
    console.log('id:', typeof params.id);
    return this.adminsService.update(params.id, updateAdminDto);
  }
}
