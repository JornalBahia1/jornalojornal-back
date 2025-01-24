import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FeaturedService } from './featured.service';
import { FeaturedController } from './featured.controller';
import { Featured, FeaturedSchema } from './schemas/featured.schema';
import { News, NewsSchema } from '../news/schemas/news.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Featured.name, schema: FeaturedSchema },
      { name: News.name, schema: NewsSchema },
    ]),
  ],
  controllers: [FeaturedController],
  providers: [FeaturedService],
})
export class FeaturedModule {}
