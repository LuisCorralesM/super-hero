import {
    typesHero
} from "../types/types";

export const heroReducer = (state = {}, action) => {
    switch (action.type) {
        case typesHero.almacenarHeroe:
            return {
                heroes:action.payload              
            }
        default:
            return state;
    }
}