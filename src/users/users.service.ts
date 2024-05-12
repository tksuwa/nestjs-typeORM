import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import type { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create({ name }: CreateUserDto) {
    return await this.userRepository.save({ name }).catch((error) => {
      throw new InternalServerErrorException(error.message);
    });
  }

  async findAll() {
    return await this.userRepository.find().catch((error) => {
      throw new InternalServerErrorException(error.message);
    });
  }

  async findOne(id: number) {
    return await this.userRepository
      .findOne({ where: { id } })
      .catch((error) => {
        throw new InternalServerErrorException(error.message);
      });
  }

  async update(id: number, { name }: UpdateUserDto) {
    return await this.userRepository.update(id, { name }).catch((error) => {
      throw new InternalServerErrorException(error.message);
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
