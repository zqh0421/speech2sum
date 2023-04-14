import express from 'express'
import axios from 'axios'
const app = express();
const port = 9876

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


app.post('/chat', async (req, res) => {
  console.log("test")
  // const formData = new FormData()
  // // formData.append('file', fs.createReadStream('https://awsbucket-audio.s3.ap-southeast-1.amazonaws.com/180127.m4a'))
  // formData.append('file', fs.createReadStream('../assets/180127.m4a'))
  // formData.append('model', 'whisper-1')
  // try {
  //   const response = await axios.post(`https://api.openai.com/v1/audio/transcriptions`, formData, {
  //     headers: {
  //       'Authorization': `Bearer ${apiKey}`,
  //       'Content-Type': `multipart/form-data`,
  //     }
  //   });
  //   console.log(response)
  //   console.log(response.data.text)
  //   return response.data.text;
  // } catch (err) {
  //   console.log(err)
  // }
  // 将回复消息发送回客户端
  // res.send(response.data.text);
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});