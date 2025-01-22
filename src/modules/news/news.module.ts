import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
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
import { User, UserSchema } from './schemas/user.schema';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: News.name, schema: NewsSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Advertisement.name, schema: AdvertisementSchema },
      { name: User.name, schema: UserSchema },
    ]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-secret-key',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [
    NewsController,
    CategoryController,
    AdvertisementController,
    AuthController,
  ],
  providers: [
    NewsService,
    CategoryService,
    AdvertisementService,
    AuthService,
    AuthGuard,
  ],
  exports: [AuthGuard],
})
export class NewsModule {}
