import {OperationActionTypes} from "./operationsActions"

const {ADD_OPERATION,CHANGE_OPERATION_TYPE_STATUS,ADD_OPERATION_TYPES,GET_OPERATION,GET_OPERATION_TYPES,DELETE_OPERATION,UPDATE_OPERATION} = OperationActionTypes


const initialState = {
    operationTypes: [],
    operations: [],
    operationType: {},
    operation:{},
   
}

const ClassReducer = function (state = initialState, action) {

    switch (action.type) {
        case GET_OPERATION_TYPES:{
            return {
                ...state,
                operationTypes: [...action.payload],
            }
        }
            break;
        case GET_OPERATION:{
            return {
                ...state,
                operations: [...action.payload],
            }
        }
            break;
    
            default: {
                return {
                    ...state,
                }
            }
    }


}


export default ClassReducer;