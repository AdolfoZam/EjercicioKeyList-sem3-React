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
            <div className="background-title">
                <div className="title">
            <h1>Ricky <span> and </span> Morty</h1>
           </div>
            <br /><br />
              
           <div className='title middle'>
                Ricky <span>and</span>Morty
                </div>
                <div className="title-bottom">
                    Ricky <span>and</span>Morty
                    </div>
                    <div className='title-divider'></div>
            <div className="search">
            <input type="text" value={typeId} onChange={e => setTypeId(e.target.value)}/>
            < button onClick={searchType}>Search</button>
            </div>
                <div className='location-item'>
                    <ul>
                        <li><span>Name:</span>{""}{wordRicky.name}</li> <br />
                        <li><span>Type:</span>{""}{wordRicky.type}</li><br />
                        <li><span>Dimention</span>{""}{wordRicky.dimension}</li>
                    </ul>
                </div>
           </div>
          
          

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