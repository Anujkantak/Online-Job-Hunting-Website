import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connection } from "./database/connection.js";
import { errorMiddleware } from "./middlewares/error.js";
import fileUpload from "express-fileupload";
import userRouter from "./routes/userRouter.js";
import jobRouter from "./routes/jobRouter.js";
import applicationRouter from "./routes/applicationRouter.js";
import { mailContent } from "./automation/mailContent.js";


const app = express();
config({ path: "./.env" });

app.use(
  cors({
    // origin:"http://localhost:5173",
     origin:process.env.FRONTEND_URL, // Allow requests from the frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow credentials (cookies, authorization headers, etc.) from the frontend
  })
);

// middleware to parse cookies and make them available in req.cookies
app.use(cookieParser());

// parses incoming JSON requests and makes the parsed data available in req.body as a JavaScript object.
app.use(express.json());

//parses incoming form data (sent as application/x-www-form-urlencoded) and makes it available in req.body as a JavaScript object.

app.use(express.urlencoded({ extended: true })); // true means Uses qs library — supports nested objects and arrays


// for file handling
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);

mailContent()
connection();
app.use(errorMiddleware);  // This middleware handles errors that occur in the application and if error then express will skip any remaining middleware and go directly to the error handling middleware.

export default app;
