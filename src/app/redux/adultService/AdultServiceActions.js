import axios from 'axios'

export const ActionTypes = {
    ADD_MEMBER_INFO :"ADD_MEMBER_INFO",
    UPDATE_MEMBER_INFO:"UPDATE_MEMBER_INFO",
    REMOVE_MEMBER:"REMOVE_MEMBER",
    GET_MEMRBER_BY_ID:"GET_MEMRBER_BY_ID",
    TRANSFER_MEMBER:"TRANSFER_MEMBER",
    SEARCH_BY_FIRST_NAME:"SEARCH_BY_FIRST_NAME",
    GET_MEMBER_INFO:"GET_MEMBER_INFO",
    TOGGLE_FORM:"TOGGLE_FORM"
    

}



export const getMemberInfo =  () => async  (dispatch) => {

    try {
        const request = await axios.get('https://jsonplaceholder.typicode.com/users')
        if(!request) return
        dispatch({
            type:ActionTypes.GET_MEMBER_INFO,
            payload: request.data,
        })
    } catch (error) {
        console.log({error});
    }
}

export const toggleForm =()=> (dispatch)=>{
    dispatch({
        type: ActionTypes.TOGGLE_FORM
    })
}

export const getMemberById =  (id) => async  (dispatch) => {

    try {
        const request = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        if(!request) return
        dispatch({
            type:ActionTypes.GET_MEMRBER_BY_ID,
            payload: request.data,
        })
    } catch (error) {
        console.log({error});
    }

}


