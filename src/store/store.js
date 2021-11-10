import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { heroReducer } from "../reducers/heroReducer";

// Configuración para las herramientas de desarrollador de 'redux'
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Se usa el metodo 'combineReducers' para agrupar la info proveniente de diversos 'reducers'; en caso pués 
// que haya mas de uno
const reducers = combineReducers({
    guardar:heroReducer
})


// Se usa el metodo 'createStore' que nos ofrece 'redux' para guardar los reducers agrupados 
// anteriormente en la constante 'reducers' => en el 'store'
export const store = createStore (
    reducers,
    // usamos 'thunk' como 'middleware' osea como motor entre el 'browser' y el 'cliente'
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

