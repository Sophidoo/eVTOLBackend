import express from "express";
import { clearUserFromEvtol, currentUserOfEvtol, evtolDeleteController, evtolEditController, evtolRegisterationController, getAllEvtolsController, getEvtolBeingUsedByUser } from "../controller/EvtolController.js";
import { isLogin } from "../middleware/isLogin.js";

const evtolRoutes = express.Router();

// register an evtol
evtolRoutes.post("/register", evtolRegisterationController);

// add user to evtol
evtolRoutes.put("/user/:id", isLogin, currentUserOfEvtol)

// edit an evtol
evtolRoutes.put("/edit/:id", evtolEditController)

// delete an evtol
evtolRoutes.delete("/delete/:serial", evtolDeleteController)

// clear current user from evtol
evtolRoutes.put("/clearuser/:id", clearUserFromEvtol)

// get all evtols
evtolRoutes.get("", getAllEvtolsController)

// get evtol being used by user
evtolRoutes.get("/evtolinuse", isLogin, getEvtolBeingUsedByUser)


export default evtolRoutes