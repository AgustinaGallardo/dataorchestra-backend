
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Company } from '@prisma/client';
import { CreateCompanyDto } from './dto/company.create.dto';
import { UpdateCompanyDto } from './dto/company.update.dto';

@Injectable()
export class CompanyRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCompanyDto): Promise<Company> {
    return this.prisma.company.create({ data });
  }

  async findAll(): Promise<Company[]> {
    return this.prisma.company.findMany();
  }

  async findOne(id: number): Promise<Company | null> {
    return this.prisma.company.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateCompanyDto): Promise<Company> {
    return this.prisma.company.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Company> {
    return this.prisma.company.delete({ where: { id } });
  }
}
