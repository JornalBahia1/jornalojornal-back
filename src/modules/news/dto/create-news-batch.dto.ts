import { CreateNewsDto } from './create-news.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateNewsBatchDto {
  @ApiProperty({
    description: 'Array of news articles to create',
    type: [CreateNewsDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateNewsDto)
  @ArrayMinSize(1)
  news: CreateNewsDto[];
}
