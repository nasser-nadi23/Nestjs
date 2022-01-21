import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';



@Controller('users')
export class UsersController {
  constructor(private usersService:UsersService ){}
  @Post('/signup')
  async createUser(@Body() body:CreateUserDto){
     const user=await this.usersService.signup(body.email,body.password)
     return user
  }
}
