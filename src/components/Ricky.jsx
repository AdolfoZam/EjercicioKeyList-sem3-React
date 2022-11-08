import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RickyItem from './RickyItem';

const Ricky = () => {
    const [wordRicky,setWordRicky] = useState({})
    const [typeId, setTypeId] = useState("")

    useEffect(() => {
        const randomId=Math.floor(Math.random()*126) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
             .then(res => setWordRicky(res.data))
    },[])

    console.log(wordRicky)

    const searchType = () =>{
             axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
                 .then(res => setWordRicky(res.data))
    }           
    return (
        <div>

           <h1>Rick and Morty</h1>
              <br /><br />
              <hr />
           <div className='title-card'>
           <h2>{wordRicky.name}</h2> <br />
           <h2>{wordRicky.name}</h2><br />
           <h2>{wordRicky.type}</h2><br />
           <h2>{wordRicky.dimension}</h2>
           </div>
           <input type="text" value={typeId} onChange={e => setTypeId(e.target.value)}/>
           <button onClick={searchType}>Search</button>

           <ul>
                {
                  wordRicky.residents?.map((ricky) =>(
                    <RickyItem key={ricky} url={ricky}/>
                  
                  
                  ))}

           </ul>
        </div>
    );
};

export default Ricky;