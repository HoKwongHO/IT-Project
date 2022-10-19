import React from 'react'
import Card from '../Card/Card'
import './CardList.css'

const CardList = ({ cardList,num }) => {
  cardList = cardList.slice(0,num)
  return (
    <div className="cardList">
        { cardList.map((item) => {
            return (
                <Card info={item} key={item._id}/>
            )
        }) }
    </div>
  )
}

export default CardList