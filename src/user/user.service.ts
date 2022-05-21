import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SharedService } from '../shared/shared.service';
import { User } from './models/user.model';
import { UserDocument, USER_MODEL } from './schema/user.schema';

@Injectable()
export class UserService extends SharedService<User> {
  constructor(
    @InjectModel(USER_MODEL) private readonly _userModel: Model<UserDocument>,
  ) {
    super(_userModel);
  }
}
