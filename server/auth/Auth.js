const jwt = require('jsonwebtoken');
const dotenv=require("dotenv")

dotenv.config();

const JWT_SECTREAT=process.env.JWT_SECTREAT


const auth= (req,res,next)=>{


    if (req.headers["authorization"]) {
        let token = req.headers["authorization"];
        token = token.split(" ")[1];
    
    
    
    
    
    
    
    
    }
    


}