"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = __importDefault(require("./router"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = __importDefault(require("./config"));
const exceptions_1 = require("./helpers/exceptions");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true
}));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
app.use("/", (0, router_1.default)());
app.use((err, req, res, next) => {
    if (err instanceof exceptions_1.BadRequestException ||
        err instanceof exceptions_1.UnauthorizedException ||
        err instanceof exceptions_1.ServerErrorException ||
        err instanceof exceptions_1.NotFoundException ||
        err instanceof exceptions_1.ForbiddenException ||
        err instanceof exceptions_1.CredentialException) {
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
const server = http_1.default.createServer(app);
server.listen(8000, () => {
    console.log(`App runnning on http://localhost:8000/`);
});
const MONGO_URL = config_1.default.database;
mongoose_1.default.Promise = Promise;
mongoose_1.default.connect(MONGO_URL);
mongoose_1.default.connection.on("error", (error) => {
    console.log(error);
});
//# sourceMappingURL=index.js.map