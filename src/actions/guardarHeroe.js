import {typesHero } from "../types/types"
import axios from 'axios';

// Tenemos dos 'action' una para la petición 'asincrona' y otra para la 'sincrona'
export const guardarAsincrono =  (BUSQUEDA) => {
    // En la petición asincrona usamos 'axios' para consumir la API 'SuperHero'
    return async(dispatch) => {
        
        const API = 'https://www.superheroapi.com/api.php'
        const CLAVE_API = '4619606654769918'
        const apiHero = `${API}/${CLAVE_API}/search/${BUSQUEDA}`;

            try {
                let res = await axios.get(apiHero),
                heroe = res.data.results;
                // Una vez la promesa es resuelta positivamente, hacemos un 'dispatch' con la 'action' sincrona
                await dispatch(guardarHeroe(heroe))
                
            } catch (error) {
                console.log('ups  ' + error);
            }
    }
}
    


export const guardarHeroe = (heroe) => {
    // Aqui solo retornamos el 'type' y la info por medio del 'payload'
    return {
        type:typesHero.almacenarHeroe,
        payload: heroe
    }
}