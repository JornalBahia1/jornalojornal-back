import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Advertisement } from './schemas/advertisement.schema';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';

@Injectable()
export class AdvertisementService {
  constructor(
    @InjectModel(Advertisement.name)
    private advertisementModel: Model<Advertisement>,
  ) {}

  create(createAdvertisementDto: CreateAdvertisementDto) {
    return this.advertisementModel.create(createAdvertisementDto);
  }

  findAll(type?: 'square' | 'horizontal') {
    const query = type ? { type } : {};
    return this.advertisementModel.find(query).sort({ position: 1 });
  }

  findOne(id: string) {
    return this.advertisementModel.findById(id);
  }

  update(id: string, updateAdvertisementDto: Partial<CreateAdvertisementDto>) {
    return this.advertisementModel.findByIdAndUpdate(
      id,
      updateAdvertisementDto,
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.advertisementModel.findByIdAndDelete(id);
  }
}
