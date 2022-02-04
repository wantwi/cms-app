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
    GET_MEMRBER_BY_QUERY_TYPE:"GET_MEMRBER_BY_QUERY_TYPE",
    ADD_COMMITTEE:'ADD_COMMITTEE',
    GET_COMMITTEES:'GET_COMMITTEES',
    SET_COMMITTEE:"SET_COMMITTEE",
    GET_COMMITTEE_MEMBERS:'GET_COMMITTEE_MEMBERS',
    ADD_COMMITTEE_MEMBERS:"ADD_COMMITTEE_MEMBERS",
    SET_UPLOADED_IMAGE:"SET_UPLOADED_IMAGE"

}

const accessToken = localStorage.getItem('accessToken')
axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`

export const getMemberInfo =  () => async  (dispatch) => {

    try {
        const request = await axios.get('http://localhost:8080/api/persons/0')
       
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
        //const request = await axios.get(`http://localhost:6200/api-v1/members/${id}`)
        const request = await axios.get(`http://localhost:8080/api/person/0/${id}`)

       

        request.data.organisation = request.data.organisation.split(",");
        request.data.role = request.data.role.split(",");
       
        
        if(!request) return
        dispatch({
            type:ActionTypes.GET_MEMRBER_BY_ID,
            payload: request.data,
        })
    } catch (error) {
        console.log({error});
    }

}

export const removeMember =  (id) => async  (dispatch) => {

    try {
        const request = await axios.delete(`http://localhost:8080/api/person/${id}`)
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

   
    let fd = new FormData();
    fd.append('image',data.image)
    fd.append('firstName',data.firstName)
    fd.append('lastName',data.lastName)
    fd.append('gender',data.gender)
    fd.append('others',data.others)
    fd.append('birthDate',data.birthDate)
    fd.append('marritalStatus',data.marritalStatus)
    fd.append('occupation',data.occupation)
    fd.append('location',data.location)
    fd.append('classLeader',data.classLeader)
    fd.append('role',data.role)
    fd.append('organisation',data.organisation)
    fd.append('emergencyName',data.emergencyName)
    fd.append('yearofJoining',data.yearofJoining)
    fd.append('address',data.address)
    fd.append('phoneNumber',data.phoneNumber)
  


 
    try {
       // const request = await axios.post(`http://localhost:6200/api-v1/member/register`,data)

       //fd.append("data",Jso)

        const request = await axios.post(`http://localhost:8080/api/person/0`,fd, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
        })

        if(!request) return
        dispatch(getMemberInfo())
         dispatch({
        type: ActionTypes.TOGGLE_FORM})
    } catch (error) {
        console.log({error});
    }
}




export const updateMember =  (id,data) => async  (dispatch) => {

    delete data.image
  
    try {
        const request = await axios.put(`http://localhost:8080/api/person/${id}`,data)


        if(!request) return
        //
         dispatch({
        type: ActionTypes.TOGGLE_FORM})
        setTimeout(()=> dispatch(getMemberInfo()),100)

      //  dispatch(getMemberInfo())
    } catch (error) {
        console.log({error});
    }
}


export const addCommittee =(data)=> async(dispatch)=>{

    try {
        const request = await axios.post(`http://localhost:8080/api/committee`,data)

        if(!request) {
            throw 'Something went wrong'
            return
        }
        // dispatch({
        //     type:ActionTypes.ADD_COMMITTEE,
          
        // })
        dispatch({
            type:ActionTypes.GET_COMMITTEE,
          
        })
        
    } catch (error) {
        console.log({error});
    }

}

export const getCommittees =  () => async  (dispatch) => {

    try {
        const request = await axios.get('http://localhost:8080/api/committees')

        console.log({request})
      
        if(!request) return
        dispatch({
            type:ActionTypes.GET_COMMITTEES,
            payload: request.data,
        })
    } catch (error) {
        console.log({error});
    }
}


export const addCommitteeMembers =(id,data)=> async(dispatch)=>{

   
    try {
        if(data.length == 0){

            return
        } 
        const request = await axios.post(`http://localhost:8080/api/committee/${id}/members`,data)
      
        if(!request) return

        console.log({request})
        return
        dispatch(getCommitteeMembersByCommitteeId(id))
    } catch (error) {
        console.log({error});
    }

}

export const selecedRow =(data)=> async(dispatch)=>{

    dispatch({
        type:ActionTypes.SET_COMMITTEE,
        payload: data,
    })
    try {
        const request = await axios.get(`http://localhost:8080/api/committee/${data.id}/members`)
        
        let members = request.data.map(x => x.person)

       
        if(!request){
                throw 'Something went wrong'
        }

        dispatch({
            type:ActionTypes.GET_COMMITTEE_MEMBERS,
            payload: members,
        })

    } catch (error) {
        console.log({error});
    }

   

}


export const getCommitteeMembersByCommitteeId =(id)=> async(dispatch)=>{

    try {
        const request = await axios.get(`http://localhost:8080/api/committee/${id}/member`)
        console.log({request})
      
        if(!request){
                throw 'Something went wrong'
        }

        dispatch(toggleForm()) 

        // dispatch({
        //     type:ActionTypes.GET_COMMITTEE_MEMBERS,
        //     payload: request.data.data.committeeMembers,
        // })

    } catch (error) {
        console.log({error});
    }

}





