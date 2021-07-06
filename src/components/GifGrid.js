//import React, { useState, useEffect } from 'react';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({category}) => {


    //const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs(category);
    

    return (
        <>
            <h3 className="card animate__animated animate__fadeIn">{category}</h3>
            
            {loading && <p className="card animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
                
            </div>
        </>
    )
}
