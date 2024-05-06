import React from 'react'
import './BoltItem.css'
function BotItem({bot}) {
  return (
    <div className='item-container'>
        <img src={bot.avatar_url} alt=''  />
     <h1>{bot.name} </h1>
     <button> VIEW  WARRIOR BOT </button>
    </div>
  )
}

export default BotItem