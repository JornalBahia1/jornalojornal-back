import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdvertisementDocument = HydratedDocument<Advertisement>;

@Schema({
  timestamps: true,
})
export class Advertisement {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  linkUrl: string;

  @Prop({ required: true, enum: ['square', 'horizontal'] })
  type: 'square' | 'horizontal';

  @Prop({ default: true })
  active: boolean;

  @Prop({ required: true, min: 1 })
  position: number;
}

export const AdvertisementSchema = SchemaFactory.createForClass(Advertisement);
