import React, { useState } from 'react'
import { Drawer } from 'antd'

const ConfigDrawer = () => {
  const [isOpen, setIsOpen] = useState(true)

  const showDrawer = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Drawer title="Configuration" placement="right" onClose={onClose} open={isOpen}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default ConfigDrawer