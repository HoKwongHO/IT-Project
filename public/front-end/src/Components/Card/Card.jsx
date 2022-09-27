import React from 'react'
import './Card.css'

const Card = ({ info }) => {
  return (
    <div className='cardWrapper'>
        <div className="imgWrapper">
            <img src={info.picture} alt="no data" />
        </div>
        <div className="info">
            <p className="infoTitle">{info.name}</p>
            <p className="infoDetail">{info.price}</p>
            <p className="more">view more</p>
        </div>
    </div>
  )
}

export default Card