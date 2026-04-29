import { Component, OnInit } from '@angular/core';
import { Account, AccountType } from '../../core/models/account.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  standalone: false
})
export class DashboardComponent implements OnInit {
  // Ensure this is initialized as an empty array first
  accounts: Account[] = [];
  netWorth: number = 0;

  ngOnInit(): void {
    // Manually fill the data
    this.accounts = [
      { id: 1, accountNumber: '1000234567', accountType: AccountType.Checking, balance: 1250.50, status: 'Active', dateOpened: '2026-01-10' },
      { id: 2, accountNumber: '5000987654', accountType: AccountType.Savings, balance: 45200.75, status: 'Active', dateOpened: '2026-02-15' }
    ];

    this.calculateNetWorth();
  }

  calculateNetWorth(): void {
    if (this.accounts && this.accounts.length > 0) {
      this.netWorth = this.accounts.reduce((sum, acc) => sum + acc.balance, 0);
    }
  }
}
