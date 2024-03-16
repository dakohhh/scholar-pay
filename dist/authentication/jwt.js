"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTokenData = exports.verifyJWT = exports.createJWT = void 0;
const jsonwebtoken_1 = __importStar(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const exceptions_1 = require("../helpers/exceptions");
const users_1 = require("../db/users");
const createJWT = (data) => {
    const token = jsonwebtoken_1.default.sign(data, config_1.default.secret_key);
    return token;
};
exports.createJWT = createJWT;
const verifyJWT = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = jsonwebtoken_1.default.verify(token, config_1.default.secret_key);
        const user = yield (0, users_1.getUserById)(payload.userId);
        return user;
    }
    catch (error) {
        console.log(error);
        if (error instanceof jsonwebtoken_1.TokenExpiredError) {
            throw new exceptions_1.ForbiddenException("Access Forbidden: Token is expired, please log in again");
        }
        return null;
    }
});
exports.verifyJWT = verifyJWT;
const createTokenData = (userId) => {
    const tokenData = {
        userId: userId,
        iat: Math.floor(Date.now() / 1000), // Add 'iat' (issued at)
        exp: Math.floor(Date.now() / 1000) + (60 * 60), // Add 'exp' (expiration time)
    };
    return tokenData;
};
exports.createTokenData = createTokenData;
//# sourceMappingURL=jwt.js.map