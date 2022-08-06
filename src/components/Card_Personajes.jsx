import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
const Card_Personajes = () => {




  return (
    <div className="card">  
        <div className='card__content'>
       <img src={`${breakin[0]?.img}`} alt="" />
       <div className="card__info hidden">
         <h1>{breakin[0]?.name}</h1>
         <br />
        <ul>
           <li><span>Birthday </span>{breakin[0]?.birthday}</li>
           <li><span>Occupation: </span> {breakin[0]?.occupation[0]}</li>
           <li><span>Status:  </span>{breakin[0]?.status}</li>
           <li><span>Nikname:  </span>{breakin[0]?.nickname}</li>
         </ul>
       </div>
    </div>

    </div>
  );
}

export default Card_Personajes