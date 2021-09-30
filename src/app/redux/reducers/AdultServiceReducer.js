import { ActionTypes,getMemberInfo} from "../adultService/AdultServiceActions"

const {GET_MEMBER_INFO,ADD_MEMBER_INFO,GET_MEMRBER_BY_ID,REMOVE_MEMBER,SEARCH_BY_FIRST_NAME,TRANSFER_MEMBER,UPDATE_MEMBER_INFO,TOGGLE_FORM} = ActionTypes


const initialState = {
   
        membersInfo:[],
        churchClass: [],
        memberInfo:{},
        hideForm: true
   
}

const AdultServiceReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_MEMBER_INFO: {

          
            return {
                ...state,
                membersInfo : [...action.payload]
            }
        }

        case GET_MEMRBER_BY_ID:{

            return {
                ...state,
                memberInfo : {...action.payload},
                hideForm:false
            }
        }
        case TOGGLE_FORM:{

            return {
                ...state,
                memberInfo : {},
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

export default AdultServiceReducer


