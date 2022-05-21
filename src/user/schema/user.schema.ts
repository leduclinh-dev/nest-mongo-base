import { SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export const USER_MODEL = 'User';
export type UserDocument = User & Document;

class User {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
