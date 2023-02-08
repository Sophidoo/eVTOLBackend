import bcrypt from "bcrypt";
import Admin from "../model/AdminModel.js";

// register an admin
export const adminRegisteration = async(req, res) => {
    const{email, password} = req.body;

    try{
        const salt = await bcrypt.genSalt(5);
        const hashedPassword = await bcrypt.hash(password, salt) 
        await Admin.create({
            email,
            password: hashedPassword
        })

        res.json({
            status: "success",
            message: "Admin account created successfully"
        })
    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}

// admin login controller
export const adminLoginController = async(req, res) => {
    const {email, password} = req.body;

    try{
        const findUser = Admin.findOne({email});

        if(!findUser){
            res.json({
                status: "error",
                message: "Sorry you can not access this page"
            })
        }

        const passwordFound = await bcrypt.compare(password, findUser.password)
        if(!passwordFound){
            res.json({
                status: "error",
                message: "Incorrect Password"
            })
        }else{
            res.json({
                status: "success",
                message: "Login Successfull"
            })
        }



    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}

// change admin password
export const changePassword = async(req, res) => {
    const {password} = req.body;

    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt)

    try{
        await Admin.findByIdAndUpdate(req.params.email, {
            $set: {
                password: hashedPassword
            }
        },{
            new: true
        })

        res.json({
            status: "success",
            message: "Password updated successfully"
        })
    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}

// change admin email
export const changeEmail = async(req, res) => {
    const {email} = req.body;
    try{
        await Admin.findByIdAndUpdate(req.params.email, {
            $set: {
                email: email
            }
        },{
            new: true
        })

        res.json({
            status: "success",
            message: "Email updated successfully"
        })
    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}