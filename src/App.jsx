import { useState, useEffect } from 'react'
import './App.css'
import Main_Presentacion from './components/Main_Presentacion'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <Main_Presentacion />
    </div>
  )
}

export default App
