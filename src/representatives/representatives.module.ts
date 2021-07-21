import { MongooseModule } from '@nestjs/mongoose';
import { RepresentativesController } from './representatives.controller';
import { RepresentativesService } from './representatives.service';
import {
  Representative,
  RepresentativeSchema,
} from './schemas/representative.schema';
import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Representative.name, schema: RepresentativeSchema },
    ]),
    forwardRef(() => AuthModule),
  ],
  controllers: [RepresentativesController],
  providers: [RepresentativesService],
  exports: [RepresentativesService],
})
export class RepresentativesModule {}
