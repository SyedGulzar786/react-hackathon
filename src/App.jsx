import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Router from './config/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router/>
  )
}

export default App
