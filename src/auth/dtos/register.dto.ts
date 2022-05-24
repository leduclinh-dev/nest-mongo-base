import { LoginMethod } from '../models/login-method.enum';

export class RegisterDto {
  username?: string;
  email?: string;
  phone?: string;
  password: string;
  firstName?: string;
  lastName?: string;
  loginMethod: LoginMethod = LoginMethod.EMAIL;
}
