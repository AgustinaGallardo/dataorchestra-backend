import { Injectable, NotFoundException } from '@nestjs/common';
import { ExcelFileRepository } from './excel-file.repository';
import { CreateExcelFileDto } from './dto/excel-file.create.dto';
import { UpdateExcelFileDto } from './dto/excel-file.update.dto';
import { ExcelFile } from '@prisma/client';

@Injectable()
export class ExcelFileService {
  constructor(private readonly excelFileRepository: ExcelFileRepository) {}

  async create(createExcelFileDto: CreateExcelFileDto): Promise<ExcelFile> {
    return this.excelFileRepository.create(createExcelFileDto);
  }

  async findAll(): Promise<ExcelFile[]> {
    return this.excelFileRepository.findAll();
  }

  async findOne(id: number): Promise<ExcelFile> {
    const file = await this.excelFileRepository.findOne(id);
    if (!file) throw new NotFoundException(`ExcelFile #${id} not found`);
    return file;
  }

  async update(id: number, updateExcelFileDto: UpdateExcelFileDto): Promise<ExcelFile> {
    await this.findOne(id);
    return this.excelFileRepository.update(id, updateExcelFileDto);
  }

  async remove(id: number): Promise<ExcelFile> {
    await this.findOne(id);
    return this.excelFileRepository.remove(id);
  }
}
