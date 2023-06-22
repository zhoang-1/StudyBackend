
import db from "../models/index";
import CRUDservice from "../services/CRUDservice";


let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }

}

let getTest = (req, res) => {
    return res.render('testpage/about.ejs');
}

let getCRUD =(req, res) =>{
    return res.render('crud.ejs');
}

let postCRUD = async(req, res) =>{
    let message=  await CRUDservice.CreateNewUser(req.body);
    console.log(message)
    return res.send('post crud from server');
}

module.exports = {
    getHomePage: getHomePage,
    getTest: getTest,
    getCRUD:getCRUD,
    postCRUD:postCRUD,
}