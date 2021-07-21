import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdminsModule } from 'src/admins/admins.module';
import { CustomersModule } from 'src/customers/customers.module';
import { AdminAuthService } from './admin-auth.service';
import { CustomerAuthService } from './customer-auth.service';
import { DriverAuthService } from './driver-auth.service';
import { RepresentativeAuthService } from './representative-auth.service';
import { jwtConstants } from './constants';
import { RolesGuard } from './guards/roles.guard';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AdminLocalStrategy } from './strategies/admin-local.strategy';
import { CustomerLocalStrategy } from './strategies/customer-local.strategy';
import { DriverLocalStrategy } from './strategies/driver-local.strategy';
import { RepresentativeLocalStrategy } from './strategies/representative-local.strategy';
import { DriversService } from 'src/drivers/drivers.service';
import { AdminsService } from 'src/admins/admins.service';
import { CustomersService } from 'src/customers/customers.service';
import { RepresentativesService } from 'src/representatives/representatives.service';
import { DriversModule } from 'src/drivers/drivers.module';
import { RepresentativesModule } from 'src/representatives/representatives.module';

@Module({
  imports: [
    PassportModule,
    forwardRef(() => AdminsModule),
    forwardRef(() => CustomersModule),
    forwardRef(() => DriversModule),
    forwardRef(() => RepresentativesModule),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AdminLocalStrategy,
    CustomerLocalStrategy,
    DriverLocalStrategy,
    RepresentativeLocalStrategy,
    JwtStrategy,
    RolesGuard,
    AdminAuthService,
    CustomerAuthService,
    DriverAuthService,
    RepresentativeAuthService,
  ],
  exports: [
    AdminAuthService,
    CustomerAuthService,
    DriverAuthService,
    RepresentativeAuthService,
    AdminLocalStrategy,
    CustomerLocalStrategy,
    DriverLocalStrategy,
    RepresentativeLocalStrategy,
  ],
})
export class AuthModule {}
