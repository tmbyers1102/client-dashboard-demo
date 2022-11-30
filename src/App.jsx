import { useState } from 'react'
import '@tremor/react/dist/esm/tremor.css';
import Tabs from './Components/Tabs'

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-indigo-50 to-indigo-200">
      <Tabs />
    </div>   
  )
}

export default App
