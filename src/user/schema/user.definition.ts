import { SchemaDefinition } from 'mongoose';
import { SharedDefinition } from '../../shared/shared.model';

export const UserDefinition: SchemaDefinition = {
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  ...SharedDefinition,
};
