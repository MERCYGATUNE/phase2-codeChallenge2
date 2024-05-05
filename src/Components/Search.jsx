import {useState,useEffect} from 'react'


const url ='http://localhost:3000/bots'
function Search() {
    const [query,setQuery]= useState('');
    // SYNTAX FOR USEEFFECT
    useEffect(()=> {
      async function fetchBot(){
            
          const res= await fetch(`${url} `)
          const data= await res.json ()
          console.log(data)
        }
         fetchBot()
    },[query],)
  return (
    <div>
        <input placeholder='Enter ...'onChange={(e) => setQuery(e.target.value)} value={query} type='text'/>
    </div>
  )
}

export default Search