


import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { CreateToolDto } from './dto/create-tool.dto';


@Controller('tools')
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}



  
  @Post('tool')
  createTool(@Body() createToolDto: CreateToolDto) {
    console.log('-------------Dto------------')
    return this.toolsService.createTool(createToolDto);
  }

 //  GET ALL
  @Get('All')
  getAllTools() {
     console.log('---------------data-------')
    return this.toolsService.findAll();
   
  }

  //  GET BY ID
  @Get(':id')
  getToolById(@Param('id') id: number) {
    return this.toolsService.findOne(id);
  }

}