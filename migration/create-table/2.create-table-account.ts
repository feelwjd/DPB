import {Account} from '../../Models/Account';

console.log("======Create Account Table======");

const create_table_users = async() => {
    await Account.sync({force : true})
    .then(() => {
        console.log("✅Success Create User Table");
    })
    .catch((err) => {
        console.log("❗️Error in Create User Table : ", err);
    })
}

create_table_users();