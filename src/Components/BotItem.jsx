import React from 'react'

function BotItem({bot}) {
  return (
    <div>
        <img src={bot.avatar_url} alt=''  />
     <h1>{bot.name} </h1>
     <button> VIEW  WARRIOR BOT </button>
    </div>
  )
}

export default BotItem