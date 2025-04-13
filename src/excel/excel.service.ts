import { Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from 'src/account/entities/account.entity';

@Injectable()
export class ExcelService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepo: Repository<Account>,
  ) {}

  async processExcel(file: Express.Multer.File) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(sheet);

    const accountsToSave = jsonData.map((row: any) => {
      const account = new Account();
      account.accountNumber = row['Account Number']?.toString();
      account.accountName = row['Account Name'];
      account.leadSheet = row['LeadSheet'] || row['Lead Sheet']; // adjust if needed
      account.opening = parseFloat(row['Opening']) || 0;
      account.closing = parseFloat(row['Closing']) || 0;
      return account;
    });

    const saved = await this.accountRepo.save(accountsToSave);
    return {
      message: `${saved.length} accounts imported successfully`,
    };
  }
}
