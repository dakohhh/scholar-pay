"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("../authentication/jwt");
const exceptions_1 = require("../helpers/exceptions");
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Extract the token from the Authorization header
        if (!token) {
            throw new exceptions_1.CredentialException("Unauthorized: Missing Token");
        }
        const user = yield (0, jwt_1.verifyJWT)(token);
        if (!user) {
            throw new exceptions_1.CredentialException("Unauthorized: Invalid Token");
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
//# sourceMappingURL=authenticate.js.map