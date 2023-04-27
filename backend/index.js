import express from 'express'
import axios from 'axios'
import cors from 'cors'
import bodyParser from 'body-parser'
import FormData from 'form-data'
import * as fs from 'fs'

const app = express();
const port = 3001
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  res.send("test11")
})

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