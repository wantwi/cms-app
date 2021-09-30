import { combineReducers } from 'redux'
import ChildrenServiceReducer from '../childrenService/ChildrenServiceReducer'
import AdultServiceReducer  from './AdultServiceReducer'


const RootReducer = combineReducers({
    adultService: AdultServiceReducer,
    childrenService: ChildrenServiceReducer
})

export default RootReducer