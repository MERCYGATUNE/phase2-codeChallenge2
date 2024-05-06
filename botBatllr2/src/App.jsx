import {useState} from 'react'
import Search from './Components/Search'
import BotList from './Components/BotList'
import Nav from './Components/Nav'
import './App.css'

function App() {
  const [botData,setBotData]=useState([])

  return (
    
      <div className='App'>
        <Nav />
        <Search botData={botData} setBotData={setBotData} />
       {/* {botData.map((bot) => <h1>{bot.name} </h1>)} */}
        <BotList botData={botData} />

        </div>
    
  )
}

export default App
 
