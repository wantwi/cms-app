import React, { useRef, useState,useEffect } from 'react'
import { useQuery } from 'react-query'

import { Breadcrumb } from 'app/components'
import Image from '../001-man.svg'
import { Icon, Button, IconButton, Fab,Grid, Card  } from '@material-ui/core'

import CustomTableComponent from 'app/components/tables/CustomTableComponent'
import './AdultServicePage.css'
import FormModal from 'app/components/CustomizedDialog/FormModal'
import AddMemberForm from 'app/components/Forms/AdultService/AddMemberForm'

import {getMemberInfo,resetMemberInfo,toggleForm,getMemberByQueryType} from "../../../redux/adultService/AdultServiceActions"
import { useDispatch, useSelector } from 'react-redux'

import ImagePreviewComponent from '../../../components/ImagePreview/ImagePreviewComponent'
const data = [
    {
        image: Image,
        name: 'William Antwi-Boasiako',
        phoneNumber: '0509093234',
        classLeader: 'Rebecca Sowah',
    },
    {
        image: Image,
        name: 'William Antwi-Boasiako',
        phoneNumber: '0509093234',
        classLeader: 'Rebecca Sowah',
    },
    {
        image: Image,
        name: 'William Antwi-Boasiako',
        phoneNumber: '0509093234',
        classLeader: 'Rebecca Sowah',
    },
    {
        image: Image,
        name: 'William Antwi-Boasiako',
        phoneNumber: '0509093234',
        classLeader: 'Rebecca Sowah',
    },
    {
        image: Image,
        name: 'William Antwi-Boasiako',
        phoneNumber: '0509093234',
        classLeader: 'Rebecca Sowah',
    },
    {
        image: Image,
        name: 'William Antwi-Boasiako',
        phoneNumber: '0509093234',
        classLeader: 'Rebecca Sowah',
    },
    {
        image: Image,
        name: 'William Antwi-Boasiako',
        phoneNumber: '0509093234',
        classLeader: 'Rebecca Sowah',
    },
    {
        image: Image,
        name: 'William Antwi-Boasiako',
        phoneNumber: '0509093234',
        classLeader: 'Rebecca Sowah',
    },
    {
        image: Image,
        name: 'William Antwi-Boasiako',
        phoneNumber: '0509093234',
        classLeader: 'Rebecca Sowah',
    },
]



function AdultServicePage() {
    const dispatch = useDispatch()
    const [queryValue, setqueryValue] = useState("")

    const {membersInfo,hideForm} = useSelector((state) => state.adultService)

   
    const handlefindMemberByQuery =(queryType)=>{

            dispatch(getMemberByQueryType(queryType,queryValue))

    }

    const handleChange =(event)=>{

        setqueryValue(event.target.value)

    }

    const handleClickOpen = () => {
        dispatch(resetMemberInfo())
        dispatch(toggleForm())
    }
       
        useEffect(() => {

         
            dispatch(getMemberInfo())

            return () => {
                dispatch(toggleForm())
            
               
            }
           
        }, [])


      
  


    return (
        <div className=" m-sm-30 mt-6">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Membership', path: '/members/adult' },
                        { name: 'Adult Service' },
                    ]}
                />
            </div>

            {hideForm ? (
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Card className="px-6 pt-2 pb-4 mb-3" raised>
                            <Grid container spacing={3}>
                                <Grid item lg={4} md={4} sm={12} xs={12}>
                                    <div>
                                        <input
                                            className="form-control fw-8"
                                            type="text"
                                            placeholder="Search by first name"
                                            style={{fontSize:13}}
                                            name="search"
                                            onChange={handleChange}
                                        />
                                        <span style={{ float: 'left',marginTop:-5 }}>
                                            <IconButton onClick={() =>handlefindMemberByQuery('firstName')}>
                                                <Icon color="primary">
                                                    search
                                                </Icon>
                                            </IconButton>
                                        </span>
                                    </div>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}></Grid>

                                <Grid item lg={2} md={2} sm={6} xs={12}>
                                    <Button
                                        style={{ float: 'right' }}
                                        color="primary"
                                        variant="contained"
                                        type="submit"
                                        onClick={handleClickOpen}
                                    >
                                        <Icon>person</Icon>
                                        <span className="pl-2 capitalize">
                                            Add Member
                                        </span>
                                    </Button>
                                </Grid>
                            </Grid>

                            <CustomTableComponent data={membersInfo} />
                        </Card>
                    </Grid>
                </Grid>
            ) : (
                <Grid
                    container
                    spacing={2}
                    style={{ width: '70vw', margin: '0 auto' }}
                >
                    <Grid item lg={3} xl={3} xs={12} md={3}>
                        <Card
                            className="px-6 pt-2 pb-4 mb-3"
                            style={{ height: '585px' }}
                            raised
                        >

                            <ImagePreviewComponent/>
                        </Card>
                    </Grid>
                    <Grid item lg={8} xl={8} xs={12} md={8}>
                        <Card className="px-6 pt-2 pb-4 mb-3" raised>
                            <AddMemberForm  />
                        </Card>
                    </Grid>
                </Grid>
            )}

            {/* <Grid container spacing={3}>
                   
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Card className="px-6 pt-2 pb-4 mb-3">
                        <AddMemberForm submitActionBtn={submitActionBtn} />
                        </Card>
                    </Grid>

                    <Grid item lg={7} md={7} sm={12} xs={12}>
                    <Card className="px-6 pt-2 pb-4 mb-3">
                        <AddMemberForm submitActionBtn={submitActionBtn} />
                        </Card>
                    </Grid>
                    
                   
                
            </Grid> */}
        </div>
    )
}

export default AdultServicePage

{
    /* <FormModal
open={openModal}
title="Add New Member"
toggleModal={handleClickOpen}
submitActionBtn={submitActionBtn}
saveActionHandler={saveActionHandler}
>
<AddMemberForm
    submitActionBtn={submitActionBtn}
/>
</FormModal> */
}
