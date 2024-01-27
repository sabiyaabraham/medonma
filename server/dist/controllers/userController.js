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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProfile = exports.updatePic = exports.updateInfo = exports.userInfo = exports.reRequestReSetPassword = exports.reSetPassword = exports.verifyForgotPassword = exports.forgotPassword = exports.logoutDevice = exports.deviceResendOTP = exports.verifyLogin = exports.login = exports.reSetUser = exports.reRequest = exports.verify = exports.create = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const handleResponse_1 = __importDefault(require("../lib/handleResponse"));
const authService_1 = require("../services/authService");
const userService_1 = require("../services/userService");
exports.create = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)((0, exports.create)(req.body, req), res); }));
exports.verify = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)((0, exports.verify)(req.body, req), res); }));
exports.reRequest = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)((0, exports.reRequest)(req.body, req), res); }));
exports.reSetUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)((0, exports.reSetUser)(req.body, req), res); }));
exports.login = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)((0, exports.login)(req.body, req), res); }));
exports.verifyLogin = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)((0, exports.verifyLogin)(req.body, req), res); }));
exports.deviceResendOTP = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)((0, exports.deviceResendOTP)(req.body, req), res); }));
exports.logoutDevice = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)((0, exports.logoutDevice)(req.body, req), res); }));
exports.forgotPassword = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)((0, exports.forgotPassword)(req.body, req), res); }));
exports.verifyForgotPassword = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)((0, exports.verifyForgotPassword)(req.body, req), res); }));
exports.reSetPassword = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)((0, exports.reSetPassword)(req.body, req), res); }));
exports.reRequestReSetPassword = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)((0, exports.reRequestReSetPassword)(req.body, req), res); }));
exports.userInfo = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)((0, exports.userInfo)(req.body, req), res); }));
exports.updateInfo = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)((0, exports.updateInfo)(req.body, req), res); }));
exports.updatePic = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)((0, exports.updatePic)(req.body, req), res); }));
exports.removeProfile = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, handleResponse_1.default)((0, exports.removeProfile)(req.body, req), res); }));
