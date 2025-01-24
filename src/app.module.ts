import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsModule } from './modules/news/news.module';
import { FeaturedModule } from './modules/featured/featured.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://jornalojornal:jornalojornal@cluster0.p4c6z.mongodb.net',
    ),
    NewsModule,
    FeaturedModule,
  ],
})
export class AppModule {}
