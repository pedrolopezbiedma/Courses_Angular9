import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable({ providedIn: "root"})
export class AccountsStoreService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
        ];
        
    constructor(private loggerService: LoggerService) { }

    addAccount(name:string, status: string){
        this.accounts.push({name, status});
        this.loggerService.logStatus(status);
    }

    updateStatus(id: number, status: string){
        this.accounts[id].status = status;
        this.loggerService.logStatus(status);
    }
}
