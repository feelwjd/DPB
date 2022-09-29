import { Sequelize, DataTypes, Model, Optional,
    HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin,
    HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, Association  
} from "sequelize";
import {sequelize} from './index';
import { User } from "./User";

interface AccountAttributes{
    account_id : string,
    account_pw : string,
    balance : number,
    user_id : string,
    del_yn : boolean,
}

export class Account extends Model<AccountAttributes>{
    private readonly _id!: number;
    private _account_id!: string;
    private _balance!: number;
    private _user_id!: string;
    private _account_pw!: string;
    private readonly _createdAt!: Date;
    private readonly _updatedAt!: Date;
    private _del_yn!: boolean;

    get id(): number {
        return this._id;
    }

    get account_id(): string {
        return this._account_id;
    }

    set account_id(value: string) {
        if (value == null || value == "") {
            throw new Error('AccountId is Empty');
        }else{
            this._account_id = value;
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

    get user_id(): string {
        return this._user_id;
    }

    set userId(value: string) {
        if (value == null || value == "") {
            throw new Error('UserId is Empty');
        }else{
            this._user_id = value;
        }
    }

    get account_pw(): string {
        return this._account_pw;
    }

    set account_pw(value: string) {
        if (value == null || value == "") {
            throw new Error('AccountPw is Empty');
        }else{
            this._account_pw = value;
        }
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    get del_yn(): boolean {
        return this._del_yn;
    }

    set del_yn(value: boolean) {
        if (value == null || value == undefined) {
            throw new Error('DelYN is Empty');
        }else{
            this._del_yn = value;
        }
    }

    public static associations: {

    };
}

Account.init(
    {
        account_id : {
            type : DataTypes.STRING(40),
            allowNull : false,
            unique : true
        },
        account_pw : {
            type : DataTypes.STRING(60),
            allowNull : false
        },
        balance : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        user_id : {
            type : DataTypes.STRING(30),
            allowNull : false
        },
        del_yn : {
            type : DataTypes.BOOLEAN,
            allowNull : false
        },
    },
    {
        modelName : 'Account',
        tableName : 'Account',
        sequelize,
        freezeTableName : true,
        timestamps : true,
        updatedAt : 'updatedAt'
    }
)
User.hasMany(Account, {
    sourceKey : "user_id",
    foreignKey : "user_id"
});
Account.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'user_id'
})