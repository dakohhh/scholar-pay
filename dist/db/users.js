"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.deleteUserById = exports.createUser = exports.getUserById = exports.getUserByEmail = exports.getUsers = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });
UserSchema.virtual('returnUser').get(function () {
    return {
        _id: this._id,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
    };
});
exports.UserModel = mongoose_1.default.model('User', UserSchema);
// Repository
const getUsers = () => exports.UserModel.find(); // returns all users in the User schema
exports.getUsers = getUsers;
const getUserByEmail = (email) => exports.UserModel.findOne({ email });
exports.getUserByEmail = getUserByEmail;
const getUserById = (userId) => exports.UserModel.findById(userId);
exports.getUserById = getUserById;
const createUser = (values) => new exports.UserModel(values)
    .save().then((user) => {
    const _a = user.toObject(), { password } = _a, userObject = __rest(_a, ["password"]);
    return userObject;
});
exports.createUser = createUser;
const deleteUserById = (userId) => exports.UserModel.findOneAndDelete({ _id: userId });
exports.deleteUserById = deleteUserById;
const updateUserById = (userId, values) => exports.UserModel.findByIdAndUpdate(userId, values);
exports.updateUserById = updateUserById;
//# sourceMappingURL=users.js.map