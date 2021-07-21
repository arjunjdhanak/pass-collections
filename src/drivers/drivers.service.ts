import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDriverDto } from './dto/create-driver.dto';
import { Driver, DriverDocument } from './schemas/driver.schema';

@Injectable()
export class DriversService {
  constructor(
    @InjectModel(Driver.name)
    private readonly driverModel: Model<DriverDocument>,
  ) {}

  async create(createDriverDto: CreateDriverDto): Promise<Driver> {
    const createdDriver = new this.driverModel(createDriverDto);
    return createdDriver.save();
  }

  async findOne(username: string): Promise<Driver> {
    return this.driverModel.findOne({ username: username });
  }

  async findAll(): Promise<Driver[]> {
    return this.driverModel.find().exec();
  }
}
