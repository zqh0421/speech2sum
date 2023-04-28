import express from 'express'
import axios from 'axios'
import cors from 'cors'
import bodyParser from 'body-parser'
import FormData from 'form-data'
import * as fs from 'fs'
import cookieParser from "cookie-parser"
import http from "http"
// import "dotenv/config"

import router from "./routers/index.js";

// mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGODB_URL).then(() => {
//   console.log("Mongodb connected");
//   server.listen(port, () => console.log(`Server is listening on port ${port}`));
// }).catch((err) => {
//   console.log({ err });
//   process.exit(1);
// });
const app = express();
const port = process.env.PORT || 3001
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());

const server = http.createServer(app);

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  next();
});

app.use("/v1", router);

app.listen(port, () => console.log(`Backend server listening on port ${port}`));