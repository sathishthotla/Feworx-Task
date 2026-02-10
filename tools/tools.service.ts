import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Tool } from './entity/tools.entity';
import { CreateToolDto } from './dto/create-tool.dto';

@Injectable()
export class ToolsService {
  constructor(
    @InjectRepository(Tool)
    private readonly toolRepo: Repository<Tool>,
  ) {}

   async createTool(dto: CreateToolDto) {
   const tool = this.toolRepo.create(dto);
    return await this.toolRepo.save(tool);
  }



  
 
  async findAll() {
    console.log('---------------data1111-------')
    return this.toolRepo.find({

          
      relations: ['category', 'industries'],
    });
  }

  //  GET  BY ID
  async findOne(id: number) {
    const tool = await this.toolRepo.findOne({
      where: { tool_id: id },
      relations: ['category', 'industries'],
    });

    if (!tool) {
      throw new NotFoundException('Tool not found');
    }

    return tool;
  }
}
