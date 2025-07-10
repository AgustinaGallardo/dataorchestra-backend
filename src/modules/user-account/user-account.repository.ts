import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UserAccount } from '@prisma/client';
import { CreateUserAccountDto } from './user-account.dto';
import { UpdateUserAccountDto } from './user-account.dto';

@Injectable()
export class UserAccountRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserAccountDto): Promise<UserAccount> {
    return this.prisma.userAccount.create({ data });
  }

  async findAll(): Promise<UserAccount[]> {
    return this.prisma.userAccount.findMany();
  }

  async findOne(id: number): Promise<UserAccount | null> {
    return this.prisma.userAccount.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateUserAccountDto): Promise<UserAccount> {
    return this.prisma.userAccount.update({ where: { id }, data });
  }

  async remove(id: number): Promise<UserAccount> {
    return this.prisma.userAccount.delete({ where: { id } });
  }
}
