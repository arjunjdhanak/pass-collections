import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminsModule } from './admins/admins.module';
import { ChatsModule } from './chats/chats.module';
import { CustomersModule } from './customers/customers.module';
import { DriversModule } from './drivers/drivers.module';
import { RepresentativesModule } from './representatives/representatives.module';
import { ReservationsModule } from './reservations/reservations.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      autoIndex: true,
    }),
    AdminsModule,
    ChatsModule,
    CustomersModule,
    DriversModule,
    RepresentativesModule,
    ReservationsModule,
    SubscriptionsModule,
    VehiclesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
