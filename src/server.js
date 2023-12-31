import  express, { json }  from "express";

import authRoutes from "./routes/authRoutes.js";
import transitionRouter from "./routes/transitionRouter.js";

import conect from "./configs/bnacoDB.js";
import "dotenv/config"

const app = express()

conect()

app.use(json())
app.use(authRoutes)
app.use(transitionRouter)

app.listen(process.env.PORT | 3001 , () => console.log('voce acessou o serve'))