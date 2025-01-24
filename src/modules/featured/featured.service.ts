import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Featured } from './schemas/featured.schema';
import { News } from '../news/schemas/news.schema';

@Injectable()
export class FeaturedService {
  constructor(
    @InjectModel(Featured.name) private featuredModel: Model<Featured>,
    @InjectModel(News.name) private newsModel: Model<News>,
  ) {}

  async create(articleId: string, position: number) {
    // Verifica se o artigo existe
    const article = await this.newsModel.findById(articleId);
    if (!article) {
      throw new NotFoundException('Artigo não encontrado');
    }

    // Verifica se já existe um artigo destacado nesta posição
    const existingFeatured = await this.featuredModel.findOne({ position });
    if (existingFeatured) {
      // Se existir, remove o destaque anterior
      await this.featuredModel.findByIdAndDelete(existingFeatured._id);
    }

    // Verifica se o artigo já está destacado em outra posição
    const alreadyFeatured = await this.featuredModel.findOne({
      article: articleId,
    });
    if (alreadyFeatured) {
      throw new BadRequestException(
        'Este artigo já está destacado em outra posição',
      );
    }

    return this.featuredModel.create({
      article: articleId,
      position,
    });
  }

  async findAll() {
    return this.featuredModel.find().populate('article').sort({ position: 1 });
  }

  async remove(id: string) {
    const featured = await this.featuredModel.findById(id);
    if (!featured) {
      throw new NotFoundException('Destaque não encontrado');
    }
    return this.featuredModel.findByIdAndDelete(id);
  }
}
