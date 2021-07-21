import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin, AdminDocument } from './schemas/admin.schema';

@Injectable()
export class AdminsService {
  constructor(
    @InjectModel(Admin.name) private readonly adminModel: Model<AdminDocument>,
  ) {}

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const createdAdmin = new this.adminModel(createAdminDto);
    return createdAdmin.save();
  }

  async findOne(username: string): Promise<Admin> {
    return this.adminModel.findOne({ username: username });
  }

  async findAll(): Promise<any> {
    return this.adminModel.find();
  }

  async update(id: String, updateAdminDto: Object): Promise<any> {
    return this.adminModel.updateOne({ _id: id }, updateAdminDto);
  }
}
