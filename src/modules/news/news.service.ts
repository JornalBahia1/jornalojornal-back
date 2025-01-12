import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { News } from './schemas/news.schema';

@Injectable()
export class NewsService {
  constructor(@InjectModel(News.name) private newsModel: Model<News>) {}

  create(createNewsDto: CreateNewsDto) {
    return this.newsModel.create(createNewsDto);
  }

  findAll() {
    return this.newsModel.find();
  }

  findOne(id: string) {
    return this.newsModel.findById(id);
  }

  update(id: string, updateNewsDto: UpdateNewsDto) {
    return this.newsModel.findByIdAndUpdate(id, updateNewsDto);
  }

  remove(id: string) {
    return this.newsModel.findByIdAndDelete(id);
  }
}
