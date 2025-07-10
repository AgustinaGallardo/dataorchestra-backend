import { Module } from '@nestjs/common';
import { UserAccountController } from './user-account.controller';
import { UserAccountService } from './user-account.service';
import { UserAccountRepository } from './user-account.repository';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [UserAccountController],
  providers: [UserAccountService, UserAccountRepository, PrismaService]
})
export class UserAccountModule {}
