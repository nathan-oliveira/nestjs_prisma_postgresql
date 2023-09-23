import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'e-mail do usuário',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: String,
    description: 'nome completo do usuário',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: Boolean,
    description: 'define se o usuário é administrador',
    default: false,
  })
  @IsBoolean()
  @IsNotEmpty()
  admin: boolean;
}
