import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { RepresentativesService } from './representatives.service';
import { CreateRepresentativeDto } from './dto/create-representative.dto';
import { Representative } from './schemas/representative.schema';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/auth/roles.enum';
import { RepresentativeAuthGuard } from 'src/auth/guards/representative-auth.guard';
import { RepresentativeAuthService } from 'src/auth/representative-auth.service';

@Controller('representative')
export class RepresentativesController {
  constructor(
    private readonly representativesService: RepresentativesService,
    private readonly authService: RepresentativeAuthService,
  ) {}

  @Roles(Role.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('register')
  async create(@Body() createRepresentativeDto: CreateRepresentativeDto) {
    await this.representativesService.create(createRepresentativeDto);
  }

  @UseGuards(RepresentativeAuthGuard)
  @Post('login')
  async authLogin(@Request() req) {
    return this.authService.authLogin(req.user._doc);
  }

  @Roles(Role.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('findAll')
  async findAll(): Promise<Representative[]> {
    return this.representativesService.findAll();
  }
}
