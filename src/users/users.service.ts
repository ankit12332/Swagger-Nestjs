import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user-dto';
import { Users } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
      ) {}
    
      async findByUsername(username: string): Promise<Users> {
        return this.usersRepository.findOne({where:{ username }});
      }
    
      async findByEmail(email: string): Promise<Users> {
        return this.usersRepository.findOne({where:{ email }});
      }
    
      async findById(id: number): Promise<Users> {
        return this.usersRepository.findOne({where:{ id }});
      }
    
      async createUser(createUserDto: CreateUserDto): Promise<void> {
        await this.usersRepository.save(createUserDto);
      }
    
      async validateUser(username: string, password: string): Promise<Users> {
        const user = await this.findByUsername(username);
        if (user && user.password === password) {
          return user;
        }
        return null;
      }
}
