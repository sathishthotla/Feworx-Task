// import { Module } from '@nestjs/common';
// import { ToolsController } from './tools.controller';
// import { ToolsService } from './tools.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Tool } from './entity/tools.entity';
// import { Category } from './entity/category.entity';
// import { Industry } from './entity/industry.entity';


// @Module({
//   imports:
//   // [TypeOrmModule.forFeature([Tool])],
//   [TypeOrmModule.forFeature([Tool, Category, Industry])],
//   controllers: [ToolsController],
//   providers: [ToolsService]
// })
// export class ToolsModule {}


// src/tools/tools.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ToolsController } from './tools.controller';
import { ToolsService } from './tools.service';

import { Tool } from './entity/tools.entity';
import { Category } from './entity/category.entity';
import { Industry } from './entity/industry.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tool, Category, Industry]),
  ],
  controllers: [ToolsController],
  providers: [ToolsService],
})
export class ToolsModule {}
