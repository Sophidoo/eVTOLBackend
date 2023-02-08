import express from "express";
import { dbConnect } from "./config/dbConnect.js";
import dotenv from "dotenv";
import userRoutes from "./routes/UserRoutes.js";
import cors from "cors";

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
    next();
});

app.use(express.json());

app.use("/api/v1/users", userRoutes);


const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server is running at ${PORT}`))