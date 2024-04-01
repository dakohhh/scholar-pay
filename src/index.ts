import express from "express";
import http from "http";
import router from "./router";
import processMiddleware from "./middleware/processes";
import exceptionHandler from "./middleware/exceptionHandler";
import dotenv from 'dotenv'
import { connectDB } from "./db";

dotenv.config();

const app = express();

processMiddleware(app);

app.use("/", router());

app.use(exceptionHandler);




const server = http.createServer(app);

connectDB()

server.listen(4000, () => {

	console.log(`App runnning on http://localhost:4000/`)

});




