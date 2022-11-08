import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RickyItem = ({ url }) => {

    const [findRicky, setFindRicky] = useState({})

    useEffect(() => {

        axios.get(url)
            .then(res => setFindRicky(res.data))
    }, [])

    console.log(findRicky)
    return (
        <div className='card-item'>
            
            <div>
                <li> {url}</li>
                <img src={findRicky.image} alt="" />
            </div>
            <div>
                <li>{findRicky?.name}</li>
                <li>{findRicky?.status}</li>
                <li>{findRicky.origin?.name}</li>
                <li>{findRicky.episode?.length}</li>
            </div>
        </div>
    );
};

export default RickyItem;