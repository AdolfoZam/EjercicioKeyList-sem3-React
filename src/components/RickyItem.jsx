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
            
            <div className='img'>
                {/* <li> {url}</li> */}
                <img src={findRicky.image} alt="" />
            </div>
            <div className='item-location'>
                <ul>
                    <li>
                        <span>Name:</span>{findRicky?.name}</li>
                    <li>
                        <span>Status:</span>{findRicky?.status}</li>
                    <li>
                        <span>Origin</span>{findRicky.origin?.name}</li>
                    <li>
                        <span>Episode</span>{findRicky.episode?.length}</li>
                </ul>
            </div>
        </div>
    );
};

export default RickyItem;