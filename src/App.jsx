import { useState } from 'react'
import Update from './Components/Updates/Update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-amber-600 to-indigo-700">
    <div className="text-white text-xl text-bold flex items-center justify-center">
      <h2 className="m-6">I am item</h2>
      <div className='mt-24'>
          <Update />
      </div>
    </div>

  </div>   
  )
}

export default App
