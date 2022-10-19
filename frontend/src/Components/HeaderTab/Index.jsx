import React, { useState } from 'react'
import './Index.css'

const Index = () => {
    const list = [
        { text: 'Food' }, { text: 'Drink' }, { text: 'Sales' }
    ];
    const [cur, setCur] = useState(-1);
    const handleSwitch = (index) => {
        if (cur === index) {
            setCur(-1)
        } else {
            setCur(index)
        }
    }
    return (
        <div className='listWrapper'>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li key={index} style={{ color: cur === index ? 'red' : 'white' }} onClick={() => handleSwitch(index)}>
                                <span>{item.text}</span>

                            </li>
                        )
                    })
                }
            </ul>
            {cur === 0 && <div className='cardItem'>
                <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </div>}
            {cur === 1 && <div className='cardItem'>

            </div>}
            {cur === 2 && <div className='cardItem'>

            </div>}
        </div>
    )
}

export default Index