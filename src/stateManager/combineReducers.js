import { initialState as Initial_State } from './initialState'

const combineReducers = (reducers) => {
    return (state, action) => {
        return Object.keys(reducers).reduce((acc, prop) => {
            return {
                ...acc,
                ...reducers[prop]({ [prop]: acc[prop] }, action),
            }
        }, state)
    }
}

export default combineReducers
