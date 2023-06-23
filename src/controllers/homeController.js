
import db from "../models/index";
import CRUDservice from "../services/CRUDservice";


let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();

        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }

}

let getTest = (req, res) => {
    return res.render('testpage/about.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDservice.CreateNewUser(req.body);
    console.log(message)
    return res.send('post crud from server');
}

let DisplayGetCRUD = async (req, res) => {
    let data = await CRUDservice.GetAlluser();
    console.log('--------------');
    console.log(data);
    return res.render('displayCRUD.ejs', {
        dataTable: data
    });
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDservice.getUserInfoById(userId);
        // check userData not found
        // let userData


        return res.render('editCRUD.ejs', {
            user: userData //x <- y
        })
    }
    else {
        return res.send('Uers Not Found');
    }
}


let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDservice.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    });
}



module.exports = {
    getHomePage: getHomePage,
    getTest: getTest,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    DisplayGetCRUD: DisplayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
}