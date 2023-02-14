import express from "express";
import { dbConnect } from "./config/dbConnect.js";
import dotenv from "dotenv";
import userRoutes from "./routes/UserRoutes.js";
import cors from "cors";
import medicationRoutes from "./routes/MedicationRoute.js";
import evtolRoutes from "./routes/EvtolRoutes.js";
import historyRoutes from "./routes/HistoryRoutes.js";

dotenv.config();
dbConnect();

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Credentials","true");
    next();
});

app.use(
  cors({
      credentials: true,
      origin: true,
      allowedHeaders: "*"
  })
)

app.options('*', cors())


app.use(express.json());

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/medications", medicationRoutes);

app.use("/api/v1/evtol", evtolRoutes)

app.use("/api/v1/history", historyRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server is running at ${PORT}`))