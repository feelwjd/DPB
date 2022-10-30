import { Sequelize, DataTypes, Model, Optional,
    HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin,
    HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, Association  
} from "sequelize";
import {sequelize} from '.';
import { Account } from "./Account";

interface TransferHistoryAttributes{
    balance : number,
    from_account : string,
    to_account : string,
    transfer_date : Date,
    success_yn : boolean,
}

export class TransferHistory extends Model<TransferHistoryAttributes>{
    private readonly _id!: number;
    private _balance!: number;
    private _from_account!: string;
    private _to_account!: string;
    private _transfer_date!: Date;
    private _success_yn!: boolean;
    private readonly _createdAt!: Date;

    get id(): number {
        return this._id;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(value: number){
        if (value == null || value == undefined) {
            throw new Error('Balance is Empty');
        }else{
            this._balance = value;
        }
    }

    get from_account(): string {
        return this._from_account;
    }

    set from_account(value: string){
        if (value == null || value == "") {
            throw new Error('From Account is Empty');
        }else{
            this._from_account = value;
        }
    }

    get to_account(): string {
        return this._to_account;
    }

    set to_account(value: string){
        if (value == null || value == "") {
            throw new Error('To Account is Empty');
        }else{
            this._to_account = value;
        }
    }    

    get transfer_date(): Date {
        return this._transfer_date;
    }

    set transfer_date(value: Date){
        if (value == null || value == undefined) {
            throw new Error('Transfer Date is Empty');
        }else{
            this._transfer_date = value;
        }
    }

    get success_yn(): boolean {
        return this._success_yn;
    }

    set success_yn(value: boolean){
        if (value == null || value == undefined) {
            throw new Error('Success Validate is Empty');
        }else{
            this._success_yn = value;
        }
    }

    get createdAt(): Date {
        return this._createdAt;
    }
}

TransferHistory.init(
    {
        balance : {
            type : DataTypes.NUMBER,
            allowNull : false,
        },
        from_account : {
            type : DataTypes.STRING(40),
            allowNull : false
        },
        to_account : {
            type : DataTypes.STRING(40),
            allowNull : false
        },
        transfer_date : {
            type : DataTypes.DATE,
            allowNull : false
        },
        success_yn : {
            type : DataTypes.BOOLEAN,
            allowNull : false
        }
    },
    {
        modelName : 'TransferHistory',
        tableName : 'TransferHistory',
        sequelize,
        freezeTableName : true,
        timestamps : true
         
    }
)

TransferHistory.belongsTo(Account, {
    foreignKey : "from_account",
    targetKey : "account_id"
})