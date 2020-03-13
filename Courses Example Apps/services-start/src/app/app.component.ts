import { Component, OnInit } from '@angular/core';
import { AccountsStoreService } from './Services/accounts-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsStoreService]
})
export class AppComponent implements OnInit{
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsStore: AccountsStoreService){}

  ngOnInit(){
    this.accounts = this.accountsStore.accounts;
  }
}
