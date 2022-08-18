import { useState, useEffect } from 'react'
import './App.css'
import Main_Presentacion from './components/Main_Presentacion'
import axios from 'axios'
import Card_Personajes from './components/Card_Personajes'


function App() {

  const [pagina, setPagina] = useState(1)
  const [porPagina, setPorPagina] = useState(6)

  const maximo = Math.ceil(location)
  return (
    <div className="App">
      <Main_Presentacion />
    
     
    </div>
  )
}

export default App
