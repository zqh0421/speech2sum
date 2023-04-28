import { useEffect, useState, useRef } from 'react'
import './Home.css'
import data from '../../../../user-data.json'
import Editor from '../../components/editor/Editor'
// import ConfigDrawer from '../../components/drawer/Drawer'
import { Drawer, Input } from 'antd'

export default function Home() {
  const [isOpen, setIsOpen] = useState(true)
  const [apiKey, setApiKey] = useState("")
  useEffect(() => {
    setApiKey(data["api-key"])
  }, [])
  useEffect(() => {
    console.log(apiKey)
  }, [apiKey])
  const showDrawer = () => {
    setIsOpen(true);
  }
  const onClose = () => {
    setIsOpen(false);
  }
  const onApiKeyChange = (e: any) => {
    setApiKey(e.target.value)
  }
  const onEditorUnavailableBtnClick = () => {
    console.log("Please config API-KEY before your start.")
    showDrawer()
  }
  return (
   <div className='home-page'>
      <Editor clickEvent={onEditorUnavailableBtnClick} available={apiKey.length > 0}/>
      <Drawer title="Configuration" placement="right" onClose={onClose} open={isOpen}>
        <p>API-KEY</p>
        <Input
          placeholder="sk-..."
          onChange={onApiKeyChange}
          value={apiKey}
        />
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      {!isOpen && <div className="drawer-btn" onClick={showDrawer}>{"<"}</div>}
    </div>
  )
}