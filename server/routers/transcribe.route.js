import express from "express";
import FormData from "form-data";
import axios from 'axios'
import * as fs from 'fs'
// import { body } from "express-validator";
// import { tokenAuth } from "../middlewares/token.middleware.js";

import testData from '../../test-data.json' assert { type: "json" }

const router = express.Router();

router.get(
  "/",
  // tokenAuth,
  (req, res) => res.status(200).json({
    transcribe: "success"
  })
);

// 暂时跑不通，使用'/result'替代
router.post('/chat', async (req, res) => {
  const formData = new FormData()
  // formData.append('file', fs.createReadStream('https://awsbucket-audio.s3.ap-southeast-1.amazonaws.com/180127.m4a'))
  formData.append('file', fs.createReadStream('./assets/180127.m4a'))
  formData.append('model', 'whisper-1')
  try {
    const response = await axios.post(`https://api.openai.com/v1/audio/transcriptions`, formData, {
      headers: {
        'Authorization': `Bearer ${req.body.apiKey}`,
        'Content-Type': `multipart/form-data`,
      }
    });
    console.log(response)
    console.log(response.data.text)
    res.send(response)
    return response.data.text;
  } catch (err) {
    console.log(err)
  }
})

router.post('/result', async (req, res) => {
  res.send(testData.transcription)
})

export default router;
