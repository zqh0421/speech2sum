import React, { useState } from 'react'
import axios from 'axios'
import './Editor.css'
import data from '../../../../user-data.json'
interface IEditorProps {
  clickEvent: Function
  available: boolean
}

export default function Editor(props: IEditorProps) {
  // const [available, setAvailable] = useState<boolean>(false)
  const verify = async function (apiKey: string) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
          {"role": "user", "content": "Say this is a test"}
        ]
      })
    }
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', options)
      const data = await response.json()
      console.log(data)
      console.log(data.choices[0].message)
    } catch (err) {
      console.log(err)
    }
  }
  const onBtnClick = () => {
    // props.clickEvent()
    axios({
      // method: 'get',
      // url: 'http://localhost:3001/v1/test/test1',
      method: 'post',
      url: 'http://localhost:3001/v1/transcribe/chat',
      data: {
        apiKey: data['api-key']
      }
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <div className="editor-container" >
      {
        !props.available &&
        <div className="btns unavailable">
          <p>Please config API-KEY before your start.</p>
          <button type="button" onClick={onBtnClick}>Config</button>
        </div>
      }
      {
        props.available &&
        <div className="btns available">
          <button type="button" onClick={onBtnClick}>Start Transcription</button>
        </div>
      }
    </div>
  )
}