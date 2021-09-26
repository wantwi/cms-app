import AdultServiceReducer from './adults/AdultService.Reducer'
import ChildrenServiceReducers from './children/ChildrenService.Reducer'
import combineReducers from './combineReducers'

const appReducers = combineReducers({
    AdultServiceReducer,
    ChildrenServiceReducers,
})

export default appReducers
