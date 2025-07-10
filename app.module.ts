import { Module } from '@nestjs/common';
import { CompanyModule } from './src/modules/company/company.module';
import { UserAccountModule } from './src/modules/user-account/user-account.module';
import { ExcelFileModule } from './src/modules/excel-file/excel-file.module';

@Module({
  imports: [
    CompanyModule,
    UserAccountModule,
    ExcelFileModule
  ],
})
export class AppModule {}
