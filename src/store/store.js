import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { heroReducer } from "../reducers/heroReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    register:heroReducer
})

export const store = createStore (
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

