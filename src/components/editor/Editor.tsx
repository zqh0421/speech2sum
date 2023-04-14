import React, { useState } from 'react'
import axios from 'axios'
import './Editor.css'
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
    props.clickEvent()
    axios({
      method: 'get',
      url: 'http://localhost:3000/',
      // method: 'post',
      // url: 'http://localhost:3000/chat',
      // data: {
      //   apiKey: 'sk-'
      // }
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
    // verify("sk-")
  }
  return (
    <div className="editor-container" >
      {
        !props.available &&
        <div className="unavailable">
          <p>Please config API-KEY before your start.</p>
          <button type="button" onClick={onBtnClick}>Config</button>
        </div>
      }
      {
        props.available &&
        <div className="available">
          <button type="button" onClick={onBtnClick}>Upload Speech File</button>
          <button type="button" onClick={onBtnClick}>Record</button>
        </div>
      }
    </div>
  )
}