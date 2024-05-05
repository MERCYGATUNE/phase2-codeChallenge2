import {useState,useEffect} from 'react'


const url ='http://localhost:3000/bots'
function Search() {
    const [query,setQuery]= useState('name');
    // SYNTAX FOR USEEFFECT
    useEffect(()=> {
       async function fetchBot(){
            console.log('here')
          const res= await fetch(`${url} ? query=${query}`)
          const data= await res.json ()
          console.log(data.results)
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