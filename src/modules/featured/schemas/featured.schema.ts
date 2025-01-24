import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { News } from '../../news/schemas/news.schema';

export type FeaturedDocument = HydratedDocument<Featured>;

@Schema()
export class Featured {
  @Prop({ type: Types.ObjectId, ref: 'News', required: true })
  article: News;

  @Prop({ required: true, min: 1, max: 3 })
  position: number;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const FeaturedSchema = SchemaFactory.createForClass(Featured);
