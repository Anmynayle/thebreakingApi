import React from 'react'
import Card_Personajes from './Card_Personajes'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination'

const Main_Presentacion = () => {

  const [breakin, setBreakin] = useState([])

  const [pagina, setPagina] = useState(1)
  const [porPagina, setPorPagina] = useState(6)

  const maximo = Math.ceil(breakin.length/porPagina)


  useEffect(() => {
    const url = `https://www.breakingbadapi.com/api/characters?limit=62&offset=0`

    axios.get(url)
      .then(res => setBreakin(res.data))
      .catch(err => console.log(err))

  }, [])

  console.log(breakin)
  return (
    <section className='hero__main'>
      <nav>
        <img src="/src/assets/img/logo.png" alt="" />
        <ul className='nav__list'>
          <li>Home</li>
          <li>Character</li>
          <li>About</li>
          <li>Episodes</li>
        </ul>
      </nav>
      <div className='contenedor__card'>
        {breakin.slice(
          (pagina - 1) * porPagina,
          (pagina - 1) * porPagina + porPagina
        ).map(per => (
          <div className="card">
            <img src={`${per.img}`} alt="" />
            <div className="card__info hidden">
              <h1>{per?.name}</h1>
              <br />
              <ul>
                <li><span>Birthday </span>{per?.birthday}</li>
                <li><span>Occupation: </span> {per?.occupation[0]}</li>
                <li><span>Status:  </span>{per?.status}</li>
                <li><span>Nikname:  </span>{per?.nickname}</li>
              </ul>
            </div>
          </div>
        ))
        }
         <div className="conteiner_pagination">
        <div className="pagination">
           <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo}/>
        </div>
      </div>
      </div>
      
    </section>

  )
}

export default Main_Presentacion