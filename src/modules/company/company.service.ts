import { Injectable, NotFoundException } from '@nestjs/common';
import { CompanyRepository } from './company.repository';
import { CreateCompanyDto } from './dto/company.create.dto';
import { UpdateCompanyDto } from './dto/company.update.dto';
import { Company } from '@prisma/client';


@Injectable()
export class CompanyService {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companyRepository.create(createCompanyDto);
  }

  async findAll(): Promise<Company[]> {
    return this.companyRepository.findAll();
  }

  async findOne(id: number): Promise<Company> {
    const company = await this.companyRepository.findOne(id);
    if (!company) throw new NotFoundException(`Company #${id} not found`);
    return company;
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    await this.findOne(id); 
    return this.companyRepository.update(id, updateCompanyDto);
  }

  async remove(id: number): Promise<Company> {
    await this.findOne(id); 
    return this.companyRepository.remove(id);
  }
}
