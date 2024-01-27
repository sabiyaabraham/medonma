import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import handleResponse from '../lib/handleResponse'
import {
  create,
  verify,
  reRequest,
  reSetUser,
  login,
  verifyLogin,
  deviceResendOTP,
  logoutDevice,
  forgotPassword,
  verifyForgotPassword,
  reSetPassword,
  reRequestReSetPassword,
} from '../services/authService'

import {
  userInfo,
  updateInfo,
  updatePic,
  removeProfile,
} from '../services/userService'

export const create = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(create(req.body, req), res),
)

export const verify = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(verify(req.body, req), res),
)

export const reRequest = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(reRequest(req.body, req), res),
)

export const reSetUser = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(reSetUser(req.body, req), res),
)

export const login = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(login(req.body, req), res),
)

export const verifyLogin = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(verifyLogin(req.body, req), res),
)

export const deviceResendOTP = asyncHandler(
  async (req: Request, res: Response) =>
    handleResponse(deviceResendOTP(req.body, req), res),
)

export const logoutDevice = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(logoutDevice(req.body, req), res),
)

export const forgotPassword = asyncHandler(
  async (req: Request, res: Response) =>
    handleResponse(forgotPassword(req.body, req), res),
)

export const verifyForgotPassword = asyncHandler(
  async (req: Request, res: Response) =>
    handleResponse(verifyForgotPassword(req.body, req), res),
)

export const reSetPassword = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(reSetPassword(req.body, req), res),
)

export const reRequestReSetPassword = asyncHandler(
  async (req: Request, res: Response) =>
    handleResponse(reRequestReSetPassword(req.body, req), res),
)

export const userInfo = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(userInfo(req.body, req), res),
)

export const updateInfo = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(updateInfo(req.body, req), res),
)

export const updatePic = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(updatePic(req.body, req), res),
)

export const removeProfile = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(removeProfile(req.body, req), res),
)
