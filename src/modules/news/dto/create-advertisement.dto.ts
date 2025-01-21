import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsUrl,
  IsEnum,
  IsBoolean,
  IsNumber,
  Min,
} from 'class-validator';

export class CreateAdvertisementDto {
  @ApiProperty({ description: 'Título do anúncio' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'URL da imagem do anúncio' })
  @IsUrl()
  @IsNotEmpty()
  imageUrl: string;

  @ApiProperty({ description: 'URL de destino do anúncio' })
  @IsUrl()
  @IsNotEmpty()
  linkUrl: string;

  @ApiProperty({
    description: 'Tipo do anúncio',
    enum: ['square', 'horizontal'],
  })
  @IsEnum(['square', 'horizontal'])
  type: 'square' | 'horizontal';

  @ApiProperty({ description: 'Status do anúncio', default: true })
  @IsBoolean()
  active: boolean;

  @ApiProperty({ description: 'Posição do anúncio', minimum: 1 })
  @IsNumber()
  @Min(1)
  position: number;
}
