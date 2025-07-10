export class CreateUserAccountDto {
    name!: string;
    email!: string;
    passwordHash!: string;
    role?: string;
    companyId!: number;
  }
  
  export class UpdateUserAccountDto {
    name?: string;
    email?: string;
    passwordHash?: string;
    role?: string;
    companyId?: number;
  }
  