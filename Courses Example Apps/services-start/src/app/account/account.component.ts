import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggerService } from '../Services/logger.service';
import { AccountsStoreService } from '../Services/accounts-store.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggerService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggerService: LoggerService, private accountsStore: AccountsStoreService){}

  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    //console.log('A server status changed, new status: ' + status);
    this.accountsStore.updateStatus(this.id, status);
    this.loggerService.logStatus(status);
  }
}
