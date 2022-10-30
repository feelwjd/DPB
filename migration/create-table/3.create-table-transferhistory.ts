import {TransferHistory} from '../../models/TransferHistory';

console.log("======Create TransferHistory Table======");

const create_table = async() => {
    await TransferHistory.sync({force : true})
    .then(() => {
        console.log("✅Success Create TransferHistory Table");
    })
    .catch((err) => {
        console.log("❗️Error in Create TransferHistory Table : ", err);
    })
}

create_table();