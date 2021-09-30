import { ActionTypes,getChildrenInfo} from "./ChildrenServiceAction"

const {GET_CHILDREN_INFO,ADD_CHILD_INFO,GET_CHILD_BY_ID,REMOVE_CHILD,SEARCH_CHILD_BY_FIRST_NAME,TRANSFER_CHILD,UPDATE_CHILD_INFO,TOGGLE_FORM} = ActionTypes


const initialState = {
   
        childrenInfo:[],
        childrenClass: [],
        childInfo:{},
        hideForm: true
   
}

const ChildrenServiceReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_CHILDREN_INFO: {

          
            return {
                ...state,
                childrenInfo : [...action.payload]
            }
        }

        case GET_CHILD_BY_ID:{

            return {
                ...state,
                childInfo : {...action.payload},
                hideForm:false
            }
        }
        case TOGGLE_FORM:{

            return {
                ...state,
                childInfo : {},
                hideForm : !state.hideForm
            }
        }

       
        default: {
            return {
                ...state,
            }
        }
    }
}

export default ChildrenServiceReducer




