import { Controller, Get } from '@nestjs/common';
import { Account } from './entities/account.entity';
import { AccountService } from './account.service';

@Controller('accounts')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Get()
    async findAllAccounts(): Promise<Account[]> {
        return this.accountService.findAllAccounts();
    }
}
