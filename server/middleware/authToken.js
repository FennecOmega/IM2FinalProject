const { response } = require('express');
const jwt = require('jsonwebtoken');

const authToken = (req,res,next) => {
    const authHeader = req.headers["authorized"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return response.status(403).json({ message: "Unauthorized access"});
    }

    jwt.verify(token, "secretToken", (error, user) => {
        if(error){
            return response.status(403).json({ message: "Invalid"});
        }

        req.user = user;
        next();
    });
};

module.exports = authToken;