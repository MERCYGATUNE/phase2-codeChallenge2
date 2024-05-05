import {useState,useEffect} from 'react'


const url ='http://localhost:3000/bots'
function Search() {
    const [query,setQuery]= useState('name');
    // SYNTAX FOR USEEFFECT
    useEffect(()=> {
        function fetchBot(){
            console.log('here')
          const res=  fetch(`${url} ? query=${query}`)
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