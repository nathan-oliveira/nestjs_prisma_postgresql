import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    type: String,
    description: 'Título do post',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    type: String,
    description: 'Conteúdo do post',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty({
    type: String,
    description: 'E-mail do autor referente ao post',
  })
  @IsEmail()
  authorEmail: string;
}
