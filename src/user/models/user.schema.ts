import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserRole, UserStatus } from '.';
import { SharedModel } from '../../shared/shared.model';

export const USER_MODEL = 'User';
export type UserDocument = User & Document;

@Schema()
class User extends SharedModel {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop({ default: false })
  isEmailVerified: boolean;

  @Prop()
  phone: string;

  @Prop({ default: false })
  isPhoneVerified: boolean;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  avatar: string;

  @Prop()
  cover: string;

  @Prop({ default: UserRole.USER })
  role: UserRole;

  @Prop({ default: UserStatus.ACTIVE })
  status: UserStatus;
}

export const UserSchema = SchemaFactory.createForClass(User);
