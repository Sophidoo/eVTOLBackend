import jwt from "jsonwebtoken";

const generateToken = id => {
    return jwt.sign({id}, process.env.TOKEN_KEY, {expiresIn: process.env.Token_EXPIRES})
}

export default generateToken;