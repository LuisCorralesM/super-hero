import {typesHero} from "../types/types";

// Nuestro reducer recive las 'action' y segun su 'type' actualiza el 'store' => que es como el 'state' en 'redux'
export const heroReducer = (state = {}, action) => {
    switch (action.type) {
        // En caso de que el 'ation.type' sea ===  a lo que viene en 'typesHero.almacenarHeroe', actualiza
        // el 'store' con lo que viene en el 'payload'
        case typesHero.almacenarHeroe:
            return {
                heroes:action.payload              
            }
        default:
            return state;
    }
}