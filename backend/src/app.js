import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(
  cors({
    //allowing frontend origin
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
//limiting the amont of data that can be send to the server
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
export { app };