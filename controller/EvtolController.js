import Evtol from "../model/EvtolModel.js";


// Registering an Evtol
export const evtolRegisterationController = async(req, res) => {
    const{serialno, model, weight, batteryCapacity, state} = req.body;

    const findEvtol = await Evtol.findOne({serialno})

    if(findEvtol){
        return res.json({
            status: "error",
            message: "Evtol with that serial number already exists"
        })
    }

    await Evtol.create({
        serialno,
        model,
        weight,
        batteryCapacity,
        state
    })

    res.json({
        status: "success",
        message: "Evtol added sucessfully"
    })
}

// update current user using evtol
export const currentUserOfEvtol = async(req, res) => {

    try{
        await Evtol.findByIdAndUpdate(req.params.id, {
            $set: {
                user: req.userAuth
            }
        }, {
            new: true
        })

        res.json({
            status: "success",
            message: "User added successfully"
        })
    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}


// editing an evtol
export const evtolEditController = async(req, res) => {
    const{model, weight, batteryCapacity, state} = req.body;

    try{
        await Evtol.findByIdAndUpdate(req.params.id, {
            $set: {
                model : model,
                weight: weight,
                batteryCapacity: batteryCapacity,
                state: state
            }
        },
        {
            new: true
        })

        res.json({
            status: "success",
            message: "Evtol edited successfully"
        })
    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }

}

// change state of evtol
export const changeStateController = async(req, res) => {
    const{state} = req.body;

    try{
        await Evtol.findByIdAndUpdate(req.params.id, {
            $set: {
                state: state
            }
        },
        {
            new: true
        })

        res.json({
            status: "success",
            message: "Evtol edited successfully"
        })
    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }

}

// delete evtol
export const evtolDeleteController = async(req, res) => {
    const {serialno} = req.params;
    console.log(serialno)
    try{
        const evtol = await Evtol.findOne({serialno})
        console.log(evtol)

        if(!evtol){
            return res.json({
                status: "error",
                message: "Incorrect Serial Number"
            })
        }

        await Evtol.findOneAndDelete(req.params.serial)

        res.json({
            status: "success",
            message: "Evtol Deleted Successfully"
        })

    }catch(error){
        res.json({
            status: "success",
            message: error.message
        })
    }
}

// clear user id from evtol
export const clearUserFromEvtol = async(req, res) => {
    try{
        await Evtol.findByIdAndUpdate(req.params.id, {
            $set: {
                user: req.body.user
            }
        },{
            new: true
        })

        res.json({
            status: "success",
            message: "Evtol now available"
        })


    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}

// get all evtols
export const getAllEvtolsController = async(req, res) => {
    const evtols = await Evtol.find()

    try{
        res.json({
            status: "success",
            data: evtols
        })
    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}

export const getEvtolBeingUsedByUser = async(req, res) => {
    
    try{
        const evtols = await Evtol.find();
        const userEvtol = evtols.filter(e => e.user == req.userAuth)

        res.json({
            status: "success",
            data: userEvtol
        })
    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}


export const getAllAvailableEvtolsController = async(req, res) => {
    try{
        const evtols = await Evtol.find();
        const availableEvtols = evtols.filter(e => e.state === "IDLE")

        res.json({
            status: "success",
            data: availableEvtols
        })
    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}