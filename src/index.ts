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
import config from './config';
import { NotFoundException, ServerErrorException, UnauthorizedException, BadRequestException, CredentialException } from "./helpers/exceptions";

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

	if (err instanceof BadRequestException || 
		err instanceof UnauthorizedException || 
		err instanceof ServerErrorException || 
		err instanceof NotFoundException || 
		err instanceof CredentialException) {

		res.status(err.statusCode).json({
			status: false,
			message: err.message,
			data: err.data,
		});
	}
	else {
		// Handling other types of errors
		res.status(500).json({
			status: false,
			message: 'Internal Server Error',
			data: null
		});
	}
});


const server = http.createServer(app);


server.listen(8000, () => {

	console.log(`App runnning on http://localhost:8000/`)

});




const MONGO_URL = config.database

mongoose.Promise = Promise

mongoose.connect(MONGO_URL);

mongoose.connection.on("error", (error: Error) => {

	console.log(error);
})




