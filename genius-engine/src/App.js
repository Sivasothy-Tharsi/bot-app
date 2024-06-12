import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

const App = () => {
  const [mode, setMode] = useState('light');
  return (
    <>
      <Sidebar mode={mode} />
      <Main mode={mode} setMode={setMode}/>
    </>
  )
}

export default App