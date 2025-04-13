import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExcelModule } from './excel/excel.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ // DB connection config
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ledger123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ExcelModule,
    AccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
