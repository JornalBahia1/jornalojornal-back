import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ description: 'Nome da categoria' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Descrição da categoria', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Status da categoria', default: true })
  @IsBoolean()
  @IsOptional()
  active?: boolean;
}
