import axios from 'axios'


export const ActionTypes = {
    ADD_CHILD_INFO :"ADD_CHILD_INFO",
    UPDATE_CHILD_INFO:"UPDATE_CHILD_INFO",
    REMOVE_CHILD:"REMOVE_CHILD",
    GET_CHILD_BY_ID:"GET_CHILD_BY_ID",
    TRANSFER_CHILD:"TRANSFER_CHILD",
    SEARCH_CHILD_BY_FIRST_NAME:"SEARCH_CHILD_BY_FIRST_NAME",
    GET_CHILDREN_INFO:"GET_CHILDREN_INFO",
    TOGGLE_FORM:"TOGGLE_FORM"
}



export const getChildrenInfo =  () => async  (dispatch) => {

    try {
        const request = await axios.get('https://jsonplaceholder.typicode.com/users')
        if(!request) return
        dispatch({
            type:ActionTypes.GET_CHILDREN_INFO,
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

export const getChildById =  (id) => async  (dispatch) => {

    try {
        const request = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        if(!request) return
        dispatch({
            type:ActionTypes.GET_CHILD_BY_ID,
            payload: request.data,
        })
    } catch (error) {
        console.log({error});
    }

}


