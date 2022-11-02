import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({ info }) => {
  return (
      <div className='cardWrapper'>
          <div className="imgWrapper">
              <img src={info.picture} alt="no data" />
          </div>
          <div className="info">
              <p className="infoTitle">{info.name}</p>
              <p className="infoDetail">$ {info.price} </p>
              <p className="more"><Link to={"/detail/?id="+info._id}>view more</Link></p>
          </div>
      </div>
  )
}

export default Card