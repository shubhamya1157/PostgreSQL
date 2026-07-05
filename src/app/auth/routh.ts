import express from "express";
import type { Router } from "express";
import AuthenticationControllers from "./controllers.js";
export const authRouter : Router = express.Router()
const authenticationControllers = new AuthenticationControllers()



authRouter.post('/signup',authenticationControllers.handlelSignup.bind(authenticationControllers))
