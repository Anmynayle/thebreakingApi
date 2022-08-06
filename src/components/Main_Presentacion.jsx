import React from 'react'
import Card_Personajes from './Card_Personajes'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Main_Presentacion = () => {
 
  
  const [breakin, setBreakin] = useState([])
  useEffect(() => {
    const url = `https://breakingbadapi.com/api/characters?limit=6&offset=0`

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
          {breakin.map(per => (
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
        </div>
        <div className='imgfixed'></div>
      </section>
      
    )
}

export default Main_Presentacion