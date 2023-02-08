import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please input your firstname"]
    },
    lastname: {
        type: String,
        required: [true, "Please input your lastname"]
    },
    email: {
        type: String,
        required: [true, "Please input your email address"]
    },
    password: {
        type: String,
        required: [true, "Please input your password"]
    }
})

const User = mongoose.model("User", userSchema)
export default User;