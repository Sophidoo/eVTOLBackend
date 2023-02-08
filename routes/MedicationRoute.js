import express from "express";
import { addMedicationController, clearMedicationsController, deleteMedicationDetailsController, editMedicationDetailsController, getMedicationsInEvtolController } from "../controller/MedicationController.js";
import { isLogin } from "../middleware/isLogin.js";

const medicationRoutes = express.Router()

// Add medication
medicationRoutes.post("/addmedication", isLogin, addMedicationController);

// Edit Medication Details
medicationRoutes.put("/editmedication/:id", isLogin, editMedicationDetailsController);

// delete medication details 
medicationRoutes.delete("/delete", deleteMedicationDetailsController);

// get all medications in evtol
medicationRoutes.get("/getmedications/:id", isLogin, getMedicationsInEvtolController);

// clear all medications in evtol
medicationRoutes.delete("/deleteall/:id", isLogin, clearMedicationsController);

export default medicationRoutes;