import axios from 'axios'

export const ActionTypes = {
    ADD_MEMBER_INFO :"ADD_MEMBER_INFO",
    UPDATE_MEMBER_INFO:"UPDATE_MEMBER_INFO",
    REMOVE_MEMBER:"REMOVE_MEMBER",
    GET_MEMRBER_BY_ID:"GET_MEMRBER_BY_ID",
    TRANSFER_MEMBER:"TRANSFER_MEMBER",
    SEARCH_BY_FIRST_NAME:"SEARCH_BY_FIRST_NAME",
    GET_MEMBER_INFO:"GET_MEMBER_INFO",
    TOGGLE_FORM:"TOGGLE_FORM",
    REGISTER_NEW_MEMBER:"REGISTER_NEW_MEMBER",
    MEMRBER_RESET:"MEMRBER_RESET",
    GET_MEMRBER_BY_QUERY_TYPE:"GET_MEMRBER_BY_QUERY_TYPE"
    

}

const accessToken = localStorage.getItem('accessToken')
axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`

export const getMemberInfo =  () => async  (dispatch) => {

    try {
        const request = await axios.get('http://localhost:6200/api-v1/members')
        console.log(request.data)
        if(!request) return
        dispatch({
            type:ActionTypes.GET_MEMBER_INFO,
            payload: request.data.data,
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
        const request = await axios.get(`http://localhost:6200/api-v1/members/${id}`)
        if(!request) return
        dispatch({
            type:ActionTypes.GET_MEMRBER_BY_ID,
            payload: request.data.data,
        })
    } catch (error) {
        console.log({error});
    }

}

export const removeMember =  (id) => async  (dispatch) => {

    try {
        const request = await axios.delete(`http://localhost:6200/api-v1/members/${id}/delete`)
        if(!request) return
        dispatch(getMemberInfo())
        
    } catch (error) {
        console.log({error});
    }

}




export const getMemberByQueryType =  (query,value) => async  (dispatch) => {

    try {
        const request = await axios.get(`http://localhost:6200/api-v1/members?${query}=${value}`) 
        if(!request) return
        dispatch({
            type:ActionTypes.GET_MEMRBER_BY_QUERY_TYPE,
            payload: request.data.data,
        })
    } catch (error) {
        console.log({error});
    }

}


export const resetMemberInfo = () => async (dispatch)=>{
   
    

    dispatch({
        type:ActionTypes.MEMRBER_RESET,
       
    })

}


export const registerMember =  (data) => async  (dispatch) => {

    try {
        const request = await axios.post(`http://localhost:6200/api-v1/member/register`,data)


        if(!request) return
        dispatch(getMemberInfo())
         dispatch({
        type: ActionTypes.TOGGLE_FORM})
    } catch (error) {
        console.log({error});
    }
}

export const updateMember =  (id,data) => async  (dispatch) => {

    try {
        const request = await axios.put(`http://localhost:6200/api-v1/members/${id}/update`,data)


        if(!request) return
        dispatch(getMemberInfo())
         dispatch({
        type: ActionTypes.TOGGLE_FORM})
    } catch (error) {
        console.log({error});
    }
}




