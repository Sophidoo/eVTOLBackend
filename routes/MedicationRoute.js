import express from "express";
import { addMedicationController, clearMedicationsController, deleteMedicationDetailsController, editMedicationDetailsController, findMedicationById, getMedicationsInEvtolController } from "../controller/MedicationController.js";
import { isLogin } from "../middleware/isLogin.js";
import multer from "multer";
import storage from "../config/cloudinary.js";

const medicationRoutes = express.Router()
const upload = multer({storage})

// Add medication
medicationRoutes.post("/addmedication", isLogin,  upload.single("medicationPicture"),addMedicationController);

// Edit Medication Details
medicationRoutes.put("/editmedication/:id", isLogin, upload.single("medicationPicture"), editMedicationDetailsController);

// delete medication details 
medicationRoutes.delete("/delete/:id", deleteMedicationDetailsController);

// get all medications in evtol
medicationRoutes.get("/getmedications/:id", isLogin, getMedicationsInEvtolController);


// clear all medications in evtol
medicationRoutes.delete("/deleteall/:id", isLogin, clearMedicationsController);

export default medicationRoutes;