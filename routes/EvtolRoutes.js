import express from "express";
import { changeStateController, clearUserFromEvtol, currentUserOfEvtol, evtolDeleteController, evtolEditController, evtolRegisterationController, getAllAvailableEvtolsController, getAllEvtolsController, getEvtolBeingUsedByUser, getEvtolBySerial } from "../controller/EvtolController.js";
import { isLogin } from "../middleware/isLogin.js";

const evtolRoutes = express.Router()

// register an evtol
evtolRoutes.post("/register", evtolRegisterationController);

// add user to evtol
evtolRoutes.put("/user/:id", isLogin, currentUserOfEvtol)

// edit an evtol
evtolRoutes.put("/edit/:id", evtolEditController)

// get evtol b y serial
evtolRoutes.get("/:serialno", getEvtolBySerial)

// change state
evtolRoutes.put("/changestate/:id", changeStateController)

// delete an evtol
evtolRoutes.delete("/delete/:serialno", evtolDeleteController)

// clear current user from evtol
evtolRoutes.put("/clearuser/:id", clearUserFromEvtol)

// get all evtols
evtolRoutes.get("", getAllEvtolsController)

// get evtol being used by user
evtolRoutes.get("/evtolinuse", isLogin, getEvtolBeingUsedByUser)

// get all available evtols
evtolRoutes.get("/available", getAllAvailableEvtolsController)

export default evtolRoutes