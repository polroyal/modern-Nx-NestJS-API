import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ArticleDocument, Article } from './article.model';
import { CreateArticleDto } from '@nestjsorg/api/data-access-dtos';
import { Model } from 'mongoose';

@Injectable()
export class ArticleService {

  constructor(
    @InjectModel(Article.name) private article: Model<ArticleDocument>
  ) {}

  async getAll() {
    return await this.article.find().exec();
  }

  async createArticle(dto: CreateArticleDto) {
    const article = new this.article(dto);

    return this.article.create(article);
  }
}
