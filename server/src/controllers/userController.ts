import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import handleResponse from '../lib/handleResponse'
import * as authService from '../services/authService'
import * as userService from '../services/userService'

const {
  create: create_,
  verify: verify_,
  reRequest: reRequest_,
  reSetUser: reSetUser_,
  login: login_,
  verifyLogin: verifyLogin_,
  deviceResendOTP: deviceResendOTP_,
  logoutDevice: logoutDevice_,
  forgotPassword: forgotPassword_,
  // verifyForgotPassword: verifyForgotPassword_,
  // reSetPassword: reSetPassword_,
  // reRequestReSetPassword: reRequestReSetPassword_,
} = authService;

const {
  userInfo: userInfo_,
  updateInfo: updateInfo_,
  updatePic: updatePic_,
  removeProfile: removeProfile_,
} = userService;


// @ts-ignore
export const create = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(create_(req.body, req), res),
)

// @ts-ignore
export const verify = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(verify_(req.body, req), res),
)

// @ts-ignore
export const reRequest = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(reRequest_(req.body, req), res),
)

// @ts-ignore
export const reSetUser = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(reSetUser_(req.body, req), res),
)

// @ts-ignore
export const login = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(login_(req.body, req), res),
)

// @ts-ignore
export const verifyLogin = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(verifyLogin_(req.body, req), res),
)

export const deviceResendOTP = asyncHandler(
  // @ts-ignore
  async (req: Request, res: Response) =>
    handleResponse(deviceResendOTP_(req.body, req), res),
)

// @ts-ignore
export const logoutDevice = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(logoutDevice_(req.body, req), res),
)

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
export const userInfo = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(userInfo_(req.body, req), res),
)

// @ts-ignore
export const updateInfo = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(updateInfo_(req.body, req), res),
)

// @ts-ignore
export const updatePic = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(updatePic_(req.body, req), res),
)

// @ts-ignore
export const removeProfile = asyncHandler(async (req: Request, res: Response) =>
  handleResponse(removeProfile_(req.body, req), res),
)
