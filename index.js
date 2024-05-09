import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import db from "./Config/db.js";
import nameRoute from "./Route/nameRoute.js";
dotenv.config();
const app = express();
//database connection
db();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/user", nameRoute);
app.listen(PORT, () => console.log(`server is connected ${PORT}`));
