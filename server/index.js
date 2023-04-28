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

app.post('/chat', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.body)
  res.send(req.body)
  // const formData = new FormData()
  // // formData.append('file', fs.createReadStream('https://awsbucket-audio.s3.ap-southeast-1.amazonaws.com/180127.m4a'))
  // formData.append('file', fs.createReadStream('./src/assets/180127.m4a'))
  // formData.append('model', 'whisper-1')
  // console.log(req.body)
  // try {
  //   const response = await axios.post(`https://api.openai.com/v1/audio/transcriptions`, formData, {
  //     headers: {
  //       'Authorization': `Bearer ${req.body.apiKey}`,
  //       'Content-Type': `multipart/form-data`,
  //     }
  //   });
  //   console.log(response)
  //   console.log(response.data.text)
  //   res.send(response)
  //   return response.data.text;
  // } catch (err) {
  //   console.log(err)
  // }
})

app.listen(port, () => console.log(`Backend server listening on port ${port}`));