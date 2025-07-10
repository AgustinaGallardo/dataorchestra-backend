import { Module } from '@nestjs/common';
import { CompanyModule } from './src/modules/company/company.module';
import { UserAccountModule } from './src/modules/user-account/user-account.module';

@Module({
  imports: [
    CompanyModule,
    UserAccountModule
  ],
})
export class AppModule {}
