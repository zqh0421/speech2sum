import React, { useState } from 'react';
import { Drawer } from 'antd'

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}