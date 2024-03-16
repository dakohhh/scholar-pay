"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("../controllers/authentication");
const signupSchema_1 = __importDefault(require("../validation/signupSchema"));
const loginSchema_1 = __importDefault(require("../validation/loginSchema"));
const validatiion_1 = require("../middleware/validatiion");
exports.default = (router) => {
    router.post("/auth/signup", (0, validatiion_1.validateRequestBody)(signupSchema_1.default), authentication_1.signup);
    router.post("/auth/login", (0, validatiion_1.validateRequestBody)(loginSchema_1.default), authentication_1.login);
};
//# sourceMappingURL=authentication.js.map