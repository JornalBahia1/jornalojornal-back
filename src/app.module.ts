import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './modules/news/news.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    NewsModule,
    MongooseModule.forRoot(
      'mongodb+srv://jornalojornal:jornalojornal@cluster0.p4c6z.mongodb.net',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
