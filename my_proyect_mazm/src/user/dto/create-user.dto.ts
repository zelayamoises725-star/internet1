import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsOptional()
  tenantId?: number;
}