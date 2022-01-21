import {IsEmail,IsString,MinLength}  from 'class-validator'

export class CreateUserDto {
  @IsEmail()
  email:string

  @IsString()
  @MinLength(8,{
    message:'password must be at least 8 characters'
  })
  password:string
}