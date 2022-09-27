export class User {
    private Id : string = "";
    private Pw : string = "";
    private Age : number = 0;
    private Adress : string = "";
    private Name : string = "";
    
    get userId(): string {
        return this.Id;
    }

    set userId(value: string) {
        if (value == null || value == "") {
            throw new Error('Id is Empty');
        }else{
            this.Id = value;
        }
    }

    get userPw(): string {
        return this.Pw;
    }

    set userPw(value: string) {
        if (value == null || value == "") {
            throw new Error('Pw is Empty');
        }else{
            this.Pw = value;
        }
    }

    get userAge(): number {
        return this.Age;
    }

    set userAge(value: number) {
        if (value == null || value <= 0) {
            throw new Error('Age is bigger than zero');
        }else{
            this.Age = value;
        }
    }

    get userAdress(): string {
        return this.Adress;
    }

    set userAdress(value: string) {
        if (value == null || value == "") {
            throw new Error('Adress is Empty');
        }else{
            this.Adress = value;
        }
    }

    get userName(): string {
        return this.Name;
    }

    set userName(value: string) {
        if (value == null || value == "") {
            throw new Error('Name is Empty');
        }else{
            this.Name = value;
        }
    }
}