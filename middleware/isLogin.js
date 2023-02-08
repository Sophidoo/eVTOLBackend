import { obtainToken } from "../util/obtainToken.js";
import { verifyToken } from "../util/verifyToken.js";

export const isLogin = (req, res, next) => {
    const token = obtainToken(req);
    const userDecoded = verifyToken(token)

    req.userAuth = userDecoded.id;

    if(!userDecoded){
        return res.json({
            status: "error",
            message: "Please Login, token expired or invalid"
        })
    }else{
        next();
    }
}