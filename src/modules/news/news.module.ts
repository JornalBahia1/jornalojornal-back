import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { News, NewsSchema } from './schemas/news.schema';
import { Category, CategorySchema } from './schemas/category.schema';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import {
  Advertisement,
  AdvertisementSchema,
} from './schemas/advertisement.schema';
import { AdvertisementService } from './advertisement.service';
import { AdvertisementController } from './advertisement.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: News.name, schema: NewsSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Advertisement.name, schema: AdvertisementSchema },
    ]),
  ],
  controllers: [NewsController, CategoryController, AdvertisementController],
  providers: [NewsService, CategoryService, AdvertisementService],
})
export class NewsModule {}
