import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";
import exceptionHandler from "./middleware/exceptionHandler";
import dotenv from 'dotenv'
import { NotFoundException, ServerErrorException, UnauthorizedException, BadRequestException } from "./helpers/exceptions";

dotenv.config();





const app = express();


app.use(cors({
    credentials: true
}));


app.use(compression());

app.use(cookieParser());

app.use(bodyParser.json());


app.use("/", router());


app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {

    console.log(err.constructor)
    if (err instanceof BadRequestException ||
        err instanceof UnauthorizedException ||
        err instanceof ServerErrorException ||
        err instanceof NotFoundException) {
      res.status(err.statusCode).json({
        status: err.statusCode,
        message: err.message,
        success: false,
      });
    } else {
      // Handle other types of errors
      res.status(500).json({
        status: 500,
        message: 'Internal Server Error',
        success: false,
      });
    }
  });


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




