import React, { useRef, useState,useEffect } from 'react'
import { Grid, Card } from '@material-ui/core'
import { Breadcrumb } from 'app/components'

import {useDispatch,useSelector} from "react-redux"
import ClassTable from 'app/components/tables/ClassTable'
import CommitteeTable from 'app/components/tables/CommitteeTable'
import {getCommittees,getMemberInfo,addCommitteeMembers,toggleForm} from "../../../redux/adultService/AdultServiceActions"
import DisplayMemberTable from 'app/components/tables/DisplayMemberTable'
import FormModal from 'app/components/CustomizedDialog/FormModal'
import SelectionTable from 'app/components/tables/SelectionTable'

function CommitteePage() {
    const dispatch = useDispatch()
    const {committees,committeeMembers,committee,membersInfo} = useSelector(state =>state.adultService)
    const [isOpen, setisOpen] = useState(false)
    const selectionGrid = useRef(null)


  const toggleModal = ()=>{
    setisOpen(!isOpen)
  }
  const saveActionHandler =()=>{

   
    let values = selectionGrid.current.getSelectedRecords().map(x =>({memberId:x.id}))
    
     dispatch(addCommitteeMembers(committee.id,values))

     setisOpen(false)
  }

  
 

    useEffect(() => {
        dispatch(getCommittees())
        dispatch(getMemberInfo())

        return ()=>{
            setisOpen(false)
        }
       }, [])

    return (
        <div className=" m-sm-30 mt-6">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Membership', path: '/committee/add' },
                        { name: 'Committee' },
                    ]}
                />
            </div>

            <Grid container spacing={3}>
                <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                    <Card className="px-6 pt-2 pb-4 mb-3">
                        <CommitteeTable data={committees} />
                    </Card>
                </Grid>

                <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                    <Card className="px-6 pt-2 pb-4 mb-3">
                        <DisplayMemberTable data={committeeMembers} toggleModal={toggleModal} open={isOpen} />
                    </Card>
                </Grid>
            </Grid>
            <FormModal  open={isOpen}  title ={`Add to ${committee.name} Committee`} toggleModal = {toggleModal} saveActionHandler ={saveActionHandler}>
           <SelectionTable selectionGrid = {selectionGrid} data ={membersInfo}/>
            </ FormModal>
        </div>
    )
}



export default CommitteePage
