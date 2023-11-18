import { Router } from "express";
import authControlles from "../controllers/authControlles.js";
import authmiddleware from "../middlewares/authMiddlewares.js";
import { CreateUser } from "../schema/valideiton/createUser.js";
import { schemaUser } from "../schema/valideiton/schemaUser.js";
import validetSchema from "../middlewares/validetSchema.js";

const authRoutes = Router()

authRoutes.post('/signup', validetSchema(CreateUser) ,authControlles.signup)
authRoutes.post('/signin' ,validetSchema(schemaUser) ,  authControlles.signin)
authRoutes.get('/me' , authmiddleware , authControlles.userlogado)


export default authRoutes