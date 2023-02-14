import { addToHistory, getAllHistory } from "../controller/HistoryController.js";
import express from "express"

const historyRoutes = express.Router()
// get all available evtols
historyRoutes.post("", addToHistory)

// get all available evtols
historyRoutes.get("/gethistory", getAllHistory)

export default historyRoutes