import Medication from "../model/MedicationModel.js";


export const addMedicationController = async(req, res) => {
    const{medicationName, medicationCode, medicationPicture, weight, quantity, evtol, user} = req.body;

    try{
        const medications = await Medication.find();
        const medicationsInEvtol = medications.filter(med => med.evtol == evtol && med.user == req.userAuth)

        // checking if medication exists in that evtol
        const medicationExists = medicationsInEvtol.findOne({medicationCode})

        if(!medicationExists){
            return res.json({
                status: "error",
                message: "Medication Code has already been added"
            })
        }

        await Medication.create({
            medicationName, 
            medicationCode,
            medicationPicture,
            weight,
            quantity,
            evtol,
            user: req.userAuth
        })

        res.json({
            status: "success",
            message: "Medication has been Added"
        })

    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}


// edit medication details
export const editMedicationDetailsController = async(req, res) => {
    const {medicationName, medicationCode, medicationPicture, weight, quantity} = req.body;

    const medicationId = req.params.id

    try{
        const medications = await Medication.find();
        const medicationsInEvtol = medications.filter(med => med.evtol == evtol && med.user == req.userAuth)

        // checking if medication exists in that evtol
        const medicationExists = medicationsInEvtol.findOne({medicationCode})

        if(!medicationExists){
            return res.json({
                status: "error",
                message: "Medication Code has already been added"
            })
        }

        await Medication.updateOne(medicationId, {
            $set: {
                medicationName: medicationName,
                medicationCode: medicationCode,
                medicationPicture: medicationPicture,
                weight: weight,
                quantity: quantity
            }
        },{
            new: true
        })

        res.json({
            status: "success",
            message: " Medication Updated Sucessfully"
        })


    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    } 
}

export const deleteMedicationDetailsController = async(req, res) => {
    const medicationId = req.params.id;

    try{
        await Medication.findByIdAndDelete(medicationId)

        res.json({
            status: "Success",
            message: "Medication deleted Sucessfully"
        })

    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}

export const getMedicationsInEvtolController = async(req, res) => {
    const evtolId = req.params.id;

    try{
        const medications = await Medication.find();
        const medicationsInEvtol = medications.filter(med => med.evtol == evtolId && med.user == req.userAuth)

        res.json({
            status: "success",
            data: medicationsInEvtol
        })


    }catch(error){
        res.json({
            status: "success",
            message: error.message
        })
    }
}

export const clearMedicationsController = async(req, res) => {
    const evtolId = req.params.id;

    try{
        const medications = Medication.find();
        const medicationsInEvtol = medications.filter(med => med.evtol == evtolId && med.user == req.userAuth)

        await Medication.deleteMany(medicationsInEvtol);
        

    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}