import { ActionTypes, getMemberInfo } from '../adultService/AdultServiceActions'

const {
    GET_MEMBER_INFO,
    ADD_MEMBER_INFO,
    GET_MEMRBER_BY_ID,
    REMOVE_MEMBER,
    SEARCH_BY_FIRST_NAME,
    TRANSFER_MEMBER,
    UPDATE_MEMBER_INFO,
    TOGGLE_FORM,
    MEMRBER_RESET,
    GET_MEMRBER_BY_QUERY_TYPE,
    ADD_COMMITTEE,
    GET_COMMITTEES,
    SET_COMMITTEE,
    GET_COMMITTEE_MEMBERS
} = ActionTypes
const INITIAL_MEMBER_FROM = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    gender: '',
    date: new Date(),
    others: '',
    birthDate: new Date(),
    marritalStatus: '',
    occupation: '',
    location: '',
    emergencyContact: '',
    emergencyContactName: '',
    memberRole: [],
    classLeader: '',
    status: '',
    memberStatus: '',
    relation: '',
    organisation: [],
}

const initialState = {
    membersInfo: [],
    churchClass: [],
    memberInfo: {},
    hideForm: true,
    committees: [],
    committee:{},
    committeeMembers:[],
    isModalOpen:false
}

const AdultServiceReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_MEMBER_INFO: {
            return {
                ...state,
                membersInfo: [...action.payload],
            }
        }

        case GET_MEMRBER_BY_QUERY_TYPE: {
            return {
                ...state,
                membersInfo: [...action.payload],
            }
        }

        case GET_MEMRBER_BY_ID: {
            return {
                ...state,
                memberInfo: { ...action.payload },
                hideForm: false,
            }
        }
        case TOGGLE_FORM: {
            return {
                ...state,

                hideForm: !state.hideForm,
            }
        }
        case MEMRBER_RESET: {
            return {
                ...state,

                memberInfo: INITIAL_MEMBER_FROM,
            }
        }

        case GET_COMMITTEES: {
            return {
                ...state,

                committees: [...action.payload],
            }
        }

        case ADD_COMMITTEE: {
            return {
                ...state
            }
        }

        case SET_COMMITTEE: {
            return {
                ...state,
                committee:action.payload
            }
        }

        case GET_COMMITTEE_MEMBERS: {
            return {
                ...state,
                committeeMembers:action.payload
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
