import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { ExcelFileService } from './excel-file.service';
import { CreateExcelFileDto } from './dto/excel-file.create.dto';
import { UpdateExcelFileDto } from './dto/excel-file.update.dto';

@Controller('excel-file')
export class ExcelFileController {
  constructor(private readonly excelFileService: ExcelFileService) {}

  @Post()
  create(@Body() createExcelFileDto: CreateExcelFileDto) {
    return this.excelFileService.create(createExcelFileDto);
  }

  @Get()
  findAll() {
    return this.excelFileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.excelFileService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateExcelFileDto: UpdateExcelFileDto) {
    return this.excelFileService.update(id, updateExcelFileDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.excelFileService.remove(id);
  }
}
