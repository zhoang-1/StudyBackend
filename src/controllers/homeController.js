
let getHomePage =(req, res) =>{
    return res.render('homepage.ejs');
}

let getTest = (req, res)=>{
    return res.render('testpage/about.ejs');
}

module.exports ={
    getHomePage:getHomePage,
    getTest:getTest,
}