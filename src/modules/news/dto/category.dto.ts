import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ description: 'Nome da categoria' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Slug da categoria' })
  @IsString()
  slug: string;

  @ApiProperty({ description: 'Mostrar no header', default: true })
  @IsBoolean()
  @IsOptional()
  showInHeader?: boolean;
}

export class UpdateCategoryDto {
  @ApiProperty({ description: 'Nome da categoria' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ description: 'Slug da categoria' })
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiProperty({ description: 'Mostrar no header' })
  @IsBoolean()
  @IsOptional()
  showInHeader?: boolean;
}
