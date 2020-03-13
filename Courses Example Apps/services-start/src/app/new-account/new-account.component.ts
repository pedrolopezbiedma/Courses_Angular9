import { Component, EventEmitter, Output } from '@angular/core';
import { LoggerService } from '../Services/logger.service';
import { AccountsStoreService } from '../Services/accounts-store.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggerService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggerService: LoggerService, private accountsStore:AccountsStoreService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    /**
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    */
    //console.log('A server status changed, new status: ' + accountStatus);
    this.accountsStore.addAccount(accountName, accountStatus);
    this.loggerService.logStatus(accountStatus);
  }
}
