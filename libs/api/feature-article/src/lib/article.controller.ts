import { Body, Controller, Get, Post } from '@nestjs/common';
import { Article, ArticleService } from '@nestjsorg/api/data-access-article';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateArticleDto } from '@nestjsorg/api/data-access-dtos';

@Controller('articles')
@ApiTags('articles')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  async getAllArticles() {
    return await this.articleService.getAll();
  }

  @Post()
  async createArticle(@Body() article: CreateArticleDto) {

    return await this.articleService.createArticle(article)
  }
}
