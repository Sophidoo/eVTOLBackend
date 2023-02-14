import History from "../model/HistoryModel";

// Register a user
export const addToHistory = async(req, res) => {
    const{evtolSerial, medications, date, address} = req.body;

    try{

        const history = await History.create({
            evtolSerial,
            medications,
            date,
            address
        })

        res.json({
            status: "success",
            data: history
            // message: "Account Created Successfully"
        })

    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}


export const getAllHistory = async(req, res) => {
    const history = await History.find()

    try{
        res.json({
            status: "success",
            data: history
        })
    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}