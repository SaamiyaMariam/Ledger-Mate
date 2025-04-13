import { Module } from '@nestjs/common';
import { ExcelService } from './excel.service';
import { ExcelController } from './excel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from '../account/entities/account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  providers: [ExcelService],
  controllers: [ExcelController],
})
export class ExcelModule {}
