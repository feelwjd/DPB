import {Account} from '../../models/Account';

console.log("======Create Account Table======");

const create_table = async() => {
    await Account.sync({force : true})
    .then(() => {
        console.log("✅Success Create Account Table");
    })
    .catch((err) => {
        console.log("❗️Error in Create Account Table : ", err);
    })
}

create_table();