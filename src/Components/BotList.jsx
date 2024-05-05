import React from 'react'
import BotItem from './BotItem'

function BotList({botData}) {
  return (
    <div>
 {botData.map((bot) => (
    <BotItem  key={bot.id} bot={bot} />
 ))}

    </div>
  )
}

export default BotList