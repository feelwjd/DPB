export class Account{
    private _accountId!: string;
    private _balance!: number;
    private _userId!: string;
    private _accountPw!: string;

    constructor(accountId: string, balance: number, userId: string, accountPw: string){
        this.accountId = accountId;
        this.balance = balance;
        this.userId = userId;
        this.accountPw = accountPw;
    }

    get accountId(): string {
        return this._accountId;
    }

    set accountId(value: string) {
        if (value == null || value == "") {
            throw new Error('AccountId is Empty');
        }else{
            this._accountId = value;
        }
    }

    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        if (value == null || value == 0) {
            throw new Error('Balance is Empty');
        }else{
            this._balance = value;
        }
    }

    get userId(): string {
        return this._userId;
    }

    set userId(value: string) {
        if (value == null || value == "") {
            throw new Error('UserId is Empty');
        }else{
            this._userId = value;
        }
    }

    get accountPw(): string {
        return this._accountPw;
    }

    set accountPw(value: string) {
        if (value == null || value == "") {
            throw new Error('AccountPw is Empty');
        }else{
            this._accountPw = value;
        }
    }

    /*Function */
    Deposit(balance:number){
        
    }

    Withdraw(balance:number){

    }
}