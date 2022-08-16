import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const Card_Personajes = () => {

  
  const [breakin, setBreakin] = useState([])

  useEffect(() => {
    const url = `https://www.breakingbadapi.com/api/character/random`

    axios.get(url)
      .then(res => setBreakin(res.data))
      .catch(err => console.log(err))

  }, [])
  console.log(breakin)


  return (
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
  );
}

export default Card_Personajes