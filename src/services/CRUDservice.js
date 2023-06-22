import db from "../models/index";
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

let CreateNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.FirstName,
                lastName: data.LastName,
                address: data.address,
                phoneNumber: data.phonenumber,
                gender: data.gender === '1'? true:false,
                roleId: data.roleId,
            })
            resolve('ok! create a new user success!')
        } catch (e) {
            reject(e);
        }
    });

    console.log('data from services');
    console.log(data);
    console.log(hashPasswordFromBcrypt);
}
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    CreateNewUser: CreateNewUser,
}