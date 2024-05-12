import { MaxLength, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @MaxLength(255)
  @IsNotEmpty()
  name: string;
}
