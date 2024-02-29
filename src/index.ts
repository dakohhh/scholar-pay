import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";
import dotenv from 'dotenv'

dotenv.config();





const app = express();

app.use(cors({
    credentials: true
}));


app.use(compression());

app.use(cookieParser());

app.use(bodyParser.json());

app.use("/", router());


const server = http.createServer(app);


server.listen(8000, () => {

    console.log(`App runnning on http://localhost:8000/`)

});




const MONGO_URL = process.env.DEV  ? process.env.DEV_MONGO_URL : process.env.PROD_MONGO_URL || ""

mongoose.Promise = Promise

mongoose.connect(MONGO_URL);

mongoose.connection.on("error", (error: Error) => {

    console.log(error);
})




