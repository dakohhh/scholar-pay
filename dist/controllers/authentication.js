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
exports.login = exports.signup = void 0;
const users_1 = require("../db/users");
const hashing_1 = require("../authentication/hashing");
const exceptions_1 = require("../helpers/exceptions");
const auth_1 = require("../authentication/auth");
const signup = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, firstname, lastname } = request.body;
        if (yield (0, users_1.getUserByEmail)(email)) {
            throw new exceptions_1.BadRequestException("email already exists");
        }
        const user = yield (0, users_1.createUser)({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: (0, hashing_1.hashPassword)(password)
        });
        const context = { user: user };
        return response.status(201).json({ status: true, message: "user created successfully", data: context }).end();
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.signup = signup;
const login = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = request.body;
        const token = yield (0, auth_1.authenticateUser)(email, password);
        const context = { token: token };
        return response.status(200).json({
            status: true,
            message: "login successfull",
            data: context
        }).end();
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.login = login;
//# sourceMappingURL=authentication.js.map