import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUrl, MinLength } from 'class-validator';

export class CreateNewsDto {
  @ApiProperty({
    description: 'The title of the news article',
    example: 'Breaking News: Major Discovery',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @ApiProperty({
    description: 'A brief description of the news article',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  description: string;

  @ApiProperty({
    description: 'URL of the news image',
  })
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  image: string;

  @ApiProperty({
    description: 'The author of the news article',
  })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({
    description: 'The category of the news article',
  })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({
    description: 'The main content of the news article',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  content: string;
}
