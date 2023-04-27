import FormData from 'form-data'
import * as fs from 'fs'
import axios from 'axios'

async function transcribe(apiKey) {
  const formData = new FormData()
  // formData.append('file', fs.createReadStream('https://awsbucket-audio.s3.ap-southeast-1.amazonaws.com/180127.m4a'))
  formData.append('file', fs.createReadStream('../assets/180127.m4a'))
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

transcribe("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")
export default transcribe
