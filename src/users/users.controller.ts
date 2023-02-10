import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user-dto';
import { LoginUserDto } from './dtos/login-user-dto';
import { Users } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/login')
  async login(@Body() loginUserDto:LoginUserDto): Promise<Users> {
    return this.usersService.validateUser(loginUserDto.username, loginUserDto.password);
  }

  @Post('/register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }
}