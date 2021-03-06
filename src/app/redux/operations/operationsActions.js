
import axios from 'axios'
export const OperationActionTypes = {
    ADD_OPERATION_TYPES :"ADD_OPERATION_TYPES",
    GET_OPERATION_TYPES:"GET_OPERATION_TYPES",
    CHANGE_OPERATION_TYPE_STATUS:"CHANGE_OPERATION_TYPE_STATUS",
    REMOVE_OPERATION_TYPE:"REMOVE_OPERATION_TYPE",
    ADD_OPERATION :"ADD_OPERATION",
    GET_OPERATION:"GET_OPERATION",
    UPDATE_OPERATION:"UPDATE_OPERATION",
    DELETE_OPERATION:"DELETE_OPERATION"
  
}

const accessToken = localStorage.getItem('accessToken')
axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;




export const getOperationTypes=  () => async  (dispatch) => {

    try {
        const request = await axios.get(`http://localhost:8080/api/operationtype`)
        console.log({request})
       
        if(!request) return
        dispatch({
            type:OperationActionTypes.GET_OPERATION_TYPES,
            payload: request.data,
        })
    } catch (error) {
        console.log({error});
    }
}

export const getActiveOperationTypes=  () => async  (dispatch) => {

    try {
        const request = await axios.get(`http://localhost:8080/api/operationtype`)
        console.log({request})
       
        if(!request) return
        dispatch({
            type:OperationActionTypes.GET_OPERATION_TYPES,
            payload: request.data.filter(x =>x.status > 0),
        })
    } catch (error) {
        console.log({error});
    }
}

export const addOperationTypes=  (data) => async  (dispatch) => {
    
    try {
        const request = await axios.post(`http://localhost:8080/api/operationtype`,data)
       
        if(!request) return
        dispatch(getOperationTypes())
    } catch (error) {
        console.log({error});
    }
}

export const updateOperationTypes=  (data) => async  (dispatch) => {

    const {name,status} = data;
   let updateInfo ={name,status}
    try {
        const request = await axios.put(`http://localhost:8080/api/operationtype/${data.id}`,updateInfo)
     
       
        if(!request) return
        dispatch(getOperationTypes())
    } catch (error) {
        console.log({error});
    }
}

export const deleteOperationTypes=  (data) => async  (dispatch) => {

    const {id} = data[0];
 
    try {
        const request = await axios.delete(`http://localhost:8080/api/operationtype/${id}`)
       
        if(!request) return
        dispatch(getOperationTypes())
    } catch (error) {
        console.log({error});
    }
}




export const getOperations=  (month,year) => async  (dispatch) => {

    dispatch({
        type:OperationActionTypes.GET_OPERATION,
        payload:[],
    })
    
    try {
        const request = await axios.get(`http://localhost:8080/api/operation/${month}/${year}`)

      
       
        if(!request) return

     
        dispatch({
            type:OperationActionTypes.GET_OPERATION,
            payload: request.data,
        })
       
    } catch (error) {
        console.log({error});
    }
}

export const addOperation=  (data) => async  (dispatch) => {
    
    try {
        const request = await axios.post(`http://localhost:8080/api/operation`,data)
       
        if(!request) return
        dispatch(getOperationTypes())
    } catch (error) {
        console.log({error});
    }
}

export const updateOperation=  ({payload}) => async  (dispatch) => {
    const  {data,month,year} = payload
    
    try {
        const request = await axios.put(`http://localhost:8080/api/operation/${data.id}`,data)
     
       
        if(!request) return
       dispatch(getOperations(month,year))
    } catch (error) {
        console.log({error});
    }
}

export const deleteOperation=  ({payload}) => async  (dispatch) => {
     const  {data,month,year} = payload
    
    const {id} = data[0];
 
    try {
        const request = await axios.delete(`http://localhost:8080/api/operation/${id}`)
       
        if(!request) return
        dispatch(getOperations(month,year))
    } catch (error) {
        console.log({error});
    }
}
