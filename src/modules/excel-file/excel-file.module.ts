import { Module } from '@nestjs/common';
import { ExcelFileController } from './excel-file.controller';
import { ExcelFileService } from './excel-file.service';
import { ExcelFileRepository } from './excel-file.repository';
import { PrismaService } from '../../../prisma/prisma.service';


@Module({
  controllers: [ExcelFileController],
  providers: [ExcelFileService, ExcelFileRepository, PrismaService]
})
export class ExcelFileModule {}
