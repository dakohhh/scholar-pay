"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication = exports.random = void 0;
const crypto_1 = __importDefault(require("crypto"));
const SECRET = "a2fcd9e9f52b3807a1d7761be8a2b0f81bcf7fb4c320d799d97fa7a712b9c458";
const random = () => crypto_1.default.randomBytes(128).toString("base64");
exports.random = random;
const authentication = (salt, password) => {
    return crypto_1.default.createHmac("sha256", [salt, password].join("/")).update(SECRET).digest("hex");
};
exports.authentication = authentication;
//# sourceMappingURL=index.js.map