let userModel = require('../models/user');
const jwt = require("jsonwebtoken");

module.exports = async (req, res)=>{
    try{
        let body = loginParams(req);
        let {email, password} = body;
        let user = await userModel.findOne({email: email});
        //if there is no user with that email
        if(!user){
            let error = new Error();
            error.message = "Login failed. Invalid email or password";
            return res.status(401).send(error);
        }
        else{
            let result = user.validatePassword(password);
            //if password is wrong
            if(!result){
                let error = new Error();
                error.message = "Login failed. Invalid email or password";
                return res.status(401).send(error);
            }else{
                let accessToken = accessTokenGenerator(user.id, process.env.ACCESS_TOKEN_SECRET);
                let userData = {
                    accessToken,
                    firstName: user.firstName,
                    lastName: user.lastName,
                }
                res.status(200).send(userData);
            }
        }
    }catch(err){
        console.error(err);
        let error = new Error();
        err.message = "Internal Server Error";
        res.status(500).send(error);
    }
};

let accessTokenGenerator = (userId, secret)=>{
    let accessToken = jwt.sign({id: userId}, secret, {expiresIn: '2days'});
    return accessToken;
}

let loginParams = (req)=>{
    let {email, password} = req.body;
    let body = {email, password}
    return body
}