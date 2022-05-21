import { Schema, SchemaOptions } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export const schemaOptions: SchemaOptions = {
  timestamps: {
    createdAt: true,
    updatedAt: true,
  },
  toJSON: {
    virtuals: true,
    getters: true,
  },
};

@Schema(schemaOptions)
export class SharedModel extends Document {
  createdAt?: Date;
  updatedAt?: Date;
}
