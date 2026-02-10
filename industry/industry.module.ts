import { Module } from '@nestjs/common';
import { IndustryService } from './industry.service';
import { IndustryController } from './industry.controller';
import { Industry } from 'src/tools/entity/industry.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({

   imports: [TypeOrmModule.forFeature([Industry])],
  providers: [IndustryService],
  controllers: [IndustryController]
})
export class IndustryModule {}
