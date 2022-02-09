import { combineReducers } from 'redux'
import ChildrenServiceReducer from '../childrenService/ChildrenServiceReducer'
import AdultServiceReducer  from './AdultServiceReducer'
import ChurchOperation from '../operations/operationReducer'


const RootReducer = combineReducers({
    adultService: AdultServiceReducer,
    childrenService: ChildrenServiceReducer,
    churchOperation:ChurchOperation
})

export default RootReducer