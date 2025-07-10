import { Injectable, NotFoundException } from '@nestjs/common';
import { UserAccountRepository } from './user-account.repository';
import { CreateUserAccountDto } from './user-account.dto';
import { UpdateUserAccountDto } from './user-account.dto';
import { UserAccount } from '@prisma/client';

@Injectable()
export class UserAccountService {
  constructor(private readonly userAccountRepository: UserAccountRepository) {}

  async create(createUserAccountDto: CreateUserAccountDto): Promise<UserAccount> {
    return this.userAccountRepository.create(createUserAccountDto);
  }

  async findAll(): Promise<UserAccount[]> {
    return this.userAccountRepository.findAll();
  }

  async findOne(id: number): Promise<UserAccount> {
    const user = await this.userAccountRepository.findOne(id);
    if (!user) throw new NotFoundException(`UserAccount #${id} not found`);
    return user;
  }

  async update(id: number, updateUserAccountDto: UpdateUserAccountDto): Promise<UserAccount> {
    await this.findOne(id);
    return this.userAccountRepository.update(id, updateUserAccountDto);
  }

  async remove(id: number): Promise<UserAccount> {
    await this.findOne(id);
    return this.userAccountRepository.remove(id);
  }
}
