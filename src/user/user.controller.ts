import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/guards';
import { User } from './models';
import { UserService } from './user.service';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me/profile')
  async getProfile(@Req() req: Request) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = req.user as User;
    return user;
  }
}
