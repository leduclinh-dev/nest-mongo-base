import { SharedModel } from '../../shared/shared.model';

export interface User extends SharedModel {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
