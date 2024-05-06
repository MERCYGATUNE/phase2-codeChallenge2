import {useState,useEffect} from 'react'
import './Search.css'

const url ='http://localhost:3000/bots'
function Search({botData,setBotData}) {
    const [query,setQuery]= useState('');
    // SYNTAX FOR USE EFFECT
    useEffect(()=> {
      async function fetchBot(){
            
          const res= await fetch(`${url} `)
          const data= await res.json () 
          console.log(data)
          setBotData(data)
        }
         fetchBot()
    },[query],)
  return (
    <div className='search-container'>
        <input  className='input'placeholder='Enter ...'onChange={(e) => setQuery(e.target.value)} value={query} type='text'/>
    </div>
  )
}

export default Search