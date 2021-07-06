import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Para parametrizar que funciones se deben ejecutar solo una vez por render del componente.
    // Si se llega a cambiar category se vuelve a ejecutar getGifs
    useEffect( () => {
        getGifs ( category)
            .then( imgs => {
                console.log(imgs);
                setState({
                    data: imgs,
                    loading: false  
                });
            });
    }, [category])
    

    return state;
}

