
export class Account {

  private _branchNumber: number;
  private _accountNumber: string;
  private _accountType: string;
  private _accountHolder: string;
  private _deposit: number;
  private _loan: number;
  private _repaymentStatus: number;

  constructor(
    branchNumber: number,
    accountNumber: string,
    accountType: string,
    accountHolder: string,
    deposit: number,
    loan: number,
    repaymentStatus: number){
    this._branchNumber = branchNumber;
    this._accountNumber = accountNumber;
    this._accountHolder = accountHolder;
    this._accountType = accountType;
    this._deposit = deposit;
    this._loan = loan;
    this._repaymentStatus = repaymentStatus;
  }

  // 支店番号のgetter/setter
  get branchNumber(): number {
    return this._branchNumber;
  }
  set branchNumber(branchNumber: number) {
    this._branchNumber = branchNumber;
  }

  // 口座番号のgetter/setter
  get accountNumber(): string {
    return this._accountNumber;
  }
  set accountNumber(accountNumber: string) {
    this._accountNumber = accountNumber;
  }

  // 口座種別のgetter/setter
  get accountType(): string {
    return this._accountType;
  }
  set accountType(accountType: string) {
    this._accountType = accountType;
  }

  // 口座名義人
  get accountHolder(): string {
    return this._accountHolder;
  }
  set accountHolder(accountHolder: string) {
    this._accountHolder = accountHolder;
  }

  // 預金額
  get deposit(): number {
    return this._deposit;
  }
  set deposit(deposit: number) {
    this._deposit = deposit;
  }

  // ローン金額
  get loan(): number {
    return this._loan;
  }
  set loan(loan: number) {
    this._loan = loan;
  }

  // 返済ステータス
  get repaymentStatus(): number {
    return this._repaymentStatus;
  }
  set repaymentStatus(repaymentStatus: number) {
    this._repaymentStatus = repaymentStatus;
  }
}