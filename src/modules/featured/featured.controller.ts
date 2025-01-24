import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FeaturedService } from './featured.service';

@ApiTags('featured')
@Controller('featured')
export class FeaturedController {
  constructor(private readonly featuredService: FeaturedService) {}

  @Post(':articleId/:position')
  @ApiOperation({ summary: 'Destaca um artigo em uma posição específica' })
  @ApiResponse({ status: 201, description: 'Artigo destacado com sucesso' })
  @ApiResponse({
    status: 400,
    description: 'Posição já ocupada ou artigo já destacado',
  })
  @ApiResponse({ status: 404, description: 'Artigo não encontrado' })
  create(
    @Param('articleId') articleId: string,
    @Param('position') position: number,
  ) {
    return this.featuredService.create(articleId, position);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os artigos destacados' })
  @ApiResponse({ status: 200, description: 'Lista de artigos destacados' })
  findAll() {
    return this.featuredService.findAll();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um destaque' })
  @ApiResponse({ status: 200, description: 'Destaque removido com sucesso' })
  @ApiResponse({ status: 404, description: 'Destaque não encontrado' })
  remove(@Param('id') id: string) {
    return this.featuredService.remove(id);
  }
}
