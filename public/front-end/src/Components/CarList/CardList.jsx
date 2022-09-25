import React from 'react'
import Card from '../Card/Card'
import './CardList.css'

const CardList = ({ cardList }) => {
    console.log("cardList",cardList)
  return (
    <div className="cardList">
        { cardList.map((item) => {
            return (
                <Card info={item} />
            )
        }) }
    </div>
  )
}

export default CardList