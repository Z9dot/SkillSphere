import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
function App() {
  const [message, setmessage] = useState("");

  useEffect(()=>{
    axios.get("http://localhost:5000")
    .then(res => setmessage(res.data))
    .catch(err=>console.error(err))
  }, [])

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">{message}</h1>
    </div>
  )
}

export default App
