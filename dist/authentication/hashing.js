"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const hashPassword = (password) => {
    if (typeof (password) != "string")
        console.log("password must be a string");
    return bcrypt_1.default.hashSync(password, 10);
};
exports.hashPassword = hashPassword;
const checkPassword = (inputPassword, password) => {
    return bcrypt_1.default.compareSync(inputPassword, password);
};
exports.checkPassword = checkPassword;
//# sourceMappingURL=hashing.js.map