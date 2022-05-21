import { SchemaOptions } from '@nestjs/mongoose';
import { Document, SchemaDefinition } from 'mongoose';

export interface SharedModel extends Document {
  createdAt?: Date;
  updatedAt?: Date;
}

export const SharedDefinition: SchemaDefinition = {
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
};

export const schemaOptions: SchemaOptions = {
  toJSON: {
    virtuals: true,
    getters: true,
  },
};
