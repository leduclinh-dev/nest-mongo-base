import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SharedService } from '../shared/shared.service';
import { UserDocument, USER_MODEL } from './models';

@Injectable()
export class UserService extends SharedService<UserDocument> {
  constructor(
    @InjectModel(USER_MODEL) private readonly _userModel: Model<UserDocument>,
  ) {
    super(_userModel);
  }
}
