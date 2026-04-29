export enum AccountType {
  Savings = 'Savings',
  Checking = 'Checking',
  FixedDeposit = 'FixedDeposit',
  RecurringDeposit = 'RecurringDeposit'
}

export interface Account {
  id: number;
  accountNumber: string;
  accountType: AccountType;
  balance: number;
  status: string;
  dateOpened: string;
}
