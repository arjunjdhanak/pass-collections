import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRepresentativeDto } from './dto/create-representative.dto';
import {
  Representative,
  RepresentativeDocument,
} from './schemas/representative.schema';

@Injectable()
export class RepresentativesService {
  constructor(
    @InjectModel(Representative.name)
    private readonly representativeModel: Model<RepresentativeDocument>,
  ) {}

  async create(
    createRepresentativeDto: CreateRepresentativeDto,
  ): Promise<Representative> {
    const createdRepresentative = new this.representativeModel(
      createRepresentativeDto,
    );
    return createdRepresentative.save();
  }

  async findOne(username: string): Promise<Representative> {
    return this.representativeModel.findOne({ username: username });
  }

  async findAll(): Promise<Representative[]> {
    return this.representativeModel.find().exec();
  }
}
