import React from 'react'
import './Featured.css'

function Featured() {
  return (
    <div className='featured'>
    <div className='featuredImg'>
      <img src="https://q-xx.bstatic.com/xdata/images/xphoto/533x300/72203688.jpg?k=882dfd9985340ffb2a8553b56580d2139455c38e310899b3949b6dff9a8590df&o=" alt="" />
      <div className='featuredTitles'>
        <h1>Дубай</h1>
        <h2>587 варіантів</h2>
      </div>
    </div>
    <div className='featuredImg'>
      <img src="https://q-xx.bstatic.com/xdata/images/xphoto/533x300/72204269.jpg?k=dda35f09d4db949aa6786bc25686bddd016cdd12a2603193e90df0d44a51a1ac&o=" alt="" />
      <div className='featuredTitles'>
        <h1>Лондон</h1>
        <h2>510 варіантів</h2>
      </div>
    </div>
    <div className='featuredImg'>
      <img src="https://q-xx.bstatic.com/xdata/images/city/533x300/654667.jpg?k=38b7cadbc436ac8f1990d593aeea431bdca024ad7e19136de1a648a741efd1d2&o=" alt="" />
      <div className='featuredTitles'>
        <h1>Стамбул</h1>
        <h2>189 варіантів</h2>
      </div>
    </div>
    </div>
  )
}

export default Featured