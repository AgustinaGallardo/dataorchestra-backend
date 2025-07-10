import { UserAccount } from '@prisma/client';

export class UserAccountEntity implements UserAccount {
  id!: number;
  name!: string;
  email!: string;
  passwordHash!: string;
  role!: string | null;
  companyId!: number;
  createdAt!: Date;
  updatedAt!: Date;
}
