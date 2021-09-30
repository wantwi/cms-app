import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import RootReducer from './reducers/RootReducer'

const initialState = {
  
}
const middlewares = [thunk,logger]
let devtools = (x) => x

if (
    process.env.NODE_ENV !== 'production' &&
    process.browser &&
    window.__REDUX_DEVTOOLS_EXTENSION__
) {
    devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

export const Store = createStore(
    RootReducer,
    initialState,
    compose(applyMiddleware(...middlewares), devtools)
)
