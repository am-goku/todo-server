import express from "express";
import cors from "cors"
import logger from "morgan"

//dotenv config
import dotenv from "dotenv"
dotenv.config();

//database
import mongo from "./src/config/dbConfig.js";

//importing routers
import userRouter from "./src/router/user-router.js"
import taskRouter from "./src/router/task-router.js"
import authRouter from "./src/router/auth-router.js";

//App configuration
const app = express();

app.use(express.json())

//CORS setup
app.use(cors({
    origin: '*'
}))

//Database connection
mongo.connect()

app.use(logger("dev")); //logger


//Router setup
app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);
app.use("/api/auth", authRouter);



app.listen(process.env.PORT || 3020, ()=>{
    console.log(`Server started running on http://localhost:${process.env.PORT || 3020}`);
})