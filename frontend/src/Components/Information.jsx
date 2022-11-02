import React from 'react'

const Information = ({ info }) => {
  return (
    <div className="informationWrapper gradient-bg-welcome">
        <h3>{ info.title }</h3>
        <p>{ info.detail }</p>
        {/* <div className="more">view more</div> */}
    </div>
  )
}

export default Information