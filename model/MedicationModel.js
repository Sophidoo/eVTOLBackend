import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema({
    medicationName: {
        type: String,
        required: [true, "Please input the medication name"]
    },
    medicationCode: {
        type: String,
        required: [true, "Please input the medication code"]
    },
    medicationPicture: {
        type: String
    },
    weight: {
        type: mongoose.Schema.Types.Decimal128,
        required: [true, "please input the weight of the medicine"]
    },
    quantity: {
        type: Number,
        required: [true, "Please input the quantity of medications"]
    },
    evtol: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Evtol"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

})

const Medication = mongoose.model("Mediccation", medicationSchema)

export default Medication