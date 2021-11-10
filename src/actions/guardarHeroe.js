import {typesHero } from "../types/types"
import axios from 'axios';


export const guardarAsincrono =  () => {
    return async(dispatch) => {
        
        const API = 'https://www.superheroapi.com/api.php'
        const CLAVE_API = '4619606654769918'
        const BUSQUEDA = 'Batman'
        const apiHero = `${API}/${CLAVE_API}/search/${BUSQUEDA}`;

            try {
                let res = await axios.get(apiHero),
                heroe = res.data.results;
                await dispatch(guardarHeroe(heroe))
                
            } catch (error) {
                console.log('ups  ' + error);
            }
    }
}
    


export const guardarHeroe = (heroe) => {
    return {
        type:typesHero.almacenarHeroe,
        payload: heroe
    }
}