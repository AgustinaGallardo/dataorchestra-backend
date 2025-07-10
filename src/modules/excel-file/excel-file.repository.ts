import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ExcelFile } from '@prisma/client';
import { CreateExcelFileDto } from './dto/excel-file.create.dto';
import { UpdateExcelFileDto } from './dto/excel-file.update.dto';

@Injectable()
export class ExcelFileRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateExcelFileDto): Promise<ExcelFile> {
    return this.prisma.excelFile.create({ data });
  }

  async findAll(): Promise<ExcelFile[]> {
    return this.prisma.excelFile.findMany();
  }

  async findOne(id: number): Promise<ExcelFile | null> {
    return this.prisma.excelFile.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateExcelFileDto): Promise<ExcelFile> {
    return this.prisma.excelFile.update({ where: { id }, data });
  }

  async remove(id: number): Promise<ExcelFile> {
    return this.prisma.excelFile.delete({ where: { id } });
  }
}
