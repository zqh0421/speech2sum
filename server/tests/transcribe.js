import FormData from 'form-data'
import * as fs from 'fs'
import axios from 'axios'
import data from '../user-data.json'
// const FormData = require('form-data')
// const fs = require('fs')
// const axios = require('axios')

async function transcribe(apiKey) {
  const formData = new FormData()
  // formData.append('file', fs.createReadStream('https://awsbucket-audio.s3.ap-southeast-1.amazonaws.com/180127.m4a'))
  formData.append('file', fs.createReadStream('./assets/180127.m4a'))
  formData.append('model', 'whisper-1')
  try {
    const response = await axios.post(`https://api.openai.com/v1/audio/transcriptions`, formData, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': `multipart/form-data`,
      }
    });
    console.log(response)
    console.log(response.data.text)
    return response.data.text;
  } catch (err) {
    console.log(err)
  }
}
console.log(data.apiKey)
transcribe(data["api-key"])
// export default transcribe
