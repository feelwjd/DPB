export class User{
    private _id!: string;
    private _pw!: string;
    private _age!: number;
    private _adress!: string;
    private _name!: string;

    constructor(id: string, pw: string, age: number, adress: string, name: string){
        this.id = id;
        this.pw = pw;
        this.age = age;
        this.adress = adress;
        this.name = name;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        if (value == null || value == "") {
            throw new Error('Id is Empty');
        }else{
            this._id = value;
        }
    }

    get pw(): string {
        return this._pw;
    }

    set pw(value: string) {
        if (value == null || value == "") {
            throw new Error('Pw is Empty');
        }else{
            this._pw = value;
        }
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value == null || value <= 0) {
            throw new Error('Age is bigger than zero');
        }else{
            this._age = value;
        }
    }

    get adress(): string {
        return this._adress;
    }

    set adress(value: string) {
        if (value == null || value == "") {
            throw new Error('Adress is Empty');
        }else{
            this._adress = value;
        }
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value == null || value == "") {
            throw new Error('Name is Empty');
        }else{
            this._name = value;
        }
    }

    /** Function */
    
}