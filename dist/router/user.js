"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controllers/user");
const authenticate_1 = __importDefault(require("../middleware/authenticate"));
exports.default = (router) => {
    router.get("/user", authenticate_1.default, user_1.getAuthenticatedUser);
};
//# sourceMappingURL=user.js.map