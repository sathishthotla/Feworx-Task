// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { ToolsController } from './tools/tools.controller';
// import { ToolsService } from './tools/tools.service';
// import { ToolsModule } from './tools/tools.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { IndustryModule } from './industry/industry.module';
// import { CategoryModule } from './category/category.module';

// @Module({
//   imports: [
//      TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: '127.0.0.1',
//       port: 3306,
//       username: 'root',
//       password: 'root',
//       database: 'marketdb',
//       autoLoadEntities: true,
//       synchronize: true,
//     }),
//     ToolsModule,
//     IndustryModule,
//     CategoryModule],
//   controllers: [AppController, ToolsController],
//   providers: [AppService, ToolsService],
// })
// export class AppModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToolsModule } from './tools/tools.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'marketdb',
      autoLoadEntities: true,
      synchronize: true,
    }),

    ToolsModule, // ✅ VERY IMPORTANT
  ],
})
export class AppModule {}
