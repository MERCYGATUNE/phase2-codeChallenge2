import React from 'react'
import './BotItem.css'
function BotItem({bot}) {
  return (
    <div className='item'>
        <img className='item-image' src={bot.avatar_url} alt=''  />
     <h1 className='bot-name'>{bot.name}</h1>
     <h3 className='botclass'>{bot.bot_class}</h3>
     <h5>{bot.catchphrase}</h5><p className='para'>The galaxy awaits</p>
     <h4 className='health'>Health:{bot.health}</h4>
     <h4>Damage:{bot.damage}</h4>
     <h4>Armor:{bot.armor}</h4>
     

     <button className='button'> VIEW  WARRIOR BOT </button>
    </div>
  )
}

export default BotItem