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
exports.removeProfile = exports.updatePic = exports.updateInfo = exports.userInfo = exports.logoutDevice = exports.deviceResendOTP = exports.verifyLogin = exports.login = exports.reSetUser = exports.reRequest = exports.verify = exports.create = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const handleResponse_1 = __importDefault(require("../lib/handleResponse"));
const authService = __importStar(require("../services/authService"));
const userService = __importStar(require("../services/userService"));
const { create: create_, verify: verify_, reRequest: reRequest_, reSetUser: reSetUser_, login: login_, verifyLogin: verifyLogin_, deviceResendOTP: deviceResendOTP_, logoutDevice: logoutDevice_, forgotPassword: forgotPassword_,
// verifyForgotPassword: verifyForgotPassword_,
// reSetPassword: reSetPassword_,
// reRequestReSetPassword: reRequestReSetPassword_,
 } = authService;
const { userInfo: userInfo_, updateInfo: updateInfo_, updatePic: updatePic_, removeProfile: removeProfile_, } = userService;
// @ts-ignore
exports.create = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)(create_(req.body, req), res); }));
// @ts-ignore
exports.verify = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)(verify_(req.body, req), res); }));
// @ts-ignore
exports.reRequest = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)(reRequest_(req.body, req), res); }));
// @ts-ignore
exports.reSetUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)(reSetUser_(req.body, req), res); }));
// @ts-ignore
exports.login = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)(login_(req.body, req), res); }));
// @ts-ignore
exports.verifyLogin = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)(verifyLogin_(req.body, req), res); }));
exports.deviceResendOTP = (0, express_async_handler_1.default)(
// @ts-ignore
(req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)(deviceResendOTP_(req.body, req), res); }));
// @ts-ignore
exports.logoutDevice = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)(logoutDevice_(req.body, req), res); }));
// export const forgotPassword = asyncHandler(
//   // @ts-ignore
//   async (req: Request, res: Response) =>
//     handleResponse(forgotPassword_(req.body, req), res),
// )
// // @ts-ignore
// export const verifyForgotPassword = asyncHandler(
//   async (req: Request, res: Response) =>
//     handleResponse(verifyForgotPassword(req.body, req), res),
// )
// @ts-ignore
// export const reSetPassword = asyncHandler(async (req: Request, res: Response) =>
//   handleResponse(reSetPassword_(req.body, req), res),
// )
// export const reRequestReSetPassword = asyncHandler(
//   // @ts-ignore
//   async (req: Request, res: Response) =>
//     handleResponse(reRequestReSetPassword_(req.body, req), res),
// )
// @ts-ignore
exports.userInfo = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)(userInfo_(req.body, req), res); }));
// @ts-ignore
exports.updateInfo = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)(updateInfo_(req.body, req), res); }));
// @ts-ignore
exports.updatePic = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)(updatePic_(req.body, req), res); }));
// @ts-ignore
exports.removeProfile = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)(removeProfile_(req.body, req), res); }));
