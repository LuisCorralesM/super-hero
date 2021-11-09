import {
    typesHero
} from "../types/types";

const initialState = {
    Heros: {}
}

export const heroReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesHero.register:
            return {
                Heros: {
                    nombre: action.payload.name,
                    poderes: action.payload.powerstats,
                    biografia: action.payload.biography,
                    apariencia: action.payload.appearance,
                    trabajo: action.payload.work,
                    conexion: action.payload.connections,
                    imagen: action.payload.image
                }
            }
        default:
            return state;
    }
}