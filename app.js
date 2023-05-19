import express from 'express';
import User from "./routes/User.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";

export const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(fileUpload({
    limits: {fileSize: 50*1024*1024},
    useTempFiles: true,
}));

app.use(cors());

app.get('/', (req, res) => {
    res.semd("Server is working");
})
app.use("/api/v1", User);