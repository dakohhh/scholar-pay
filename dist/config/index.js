"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    development: {
        // Development environment settings
        port: process.env.PORT || 3000,
        database: process.env.DEV_MONGO_URL,
        secret_key: process.env.SECRET_KEY
    },
    production: {
        // Production environment settings
        port: process.env.PORT || 3000,
        database: process.env.PROD_MONGO_URL,
        secret_key: process.env.SECRET_KEY
    },
};
const environment = process.env.DEV ? "development" : "production";
exports.default = config[environment];
//# sourceMappingURL=index.js.map