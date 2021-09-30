import React, { useRef, useState,useEffect } from 'react'
import { Grid, Card } from '@material-ui/core'
import { Breadcrumb } from 'app/components'
import Image from '../001-man.svg'
import { Icon, Button, IconButton, Fab } from '@material-ui/core'
// import {
//     Button,
//     Icon,
//     Grid,
//     Radio,
//     RadioGroup,
//     FormControlLabel,
//     Checkbox,
// } from '@material-ui/core'
import ChildrenTable from 'app/components/tables/ChildrenTable'

import FormModal from 'app/components/CustomizedDialog/FormModal'
import AddForm from 'app/components/Forms/ChildrenService/AddForm'
import ImagePreviewComponent from 'app/components/ImagePreview/ImagePreviewComponent'
import { useDispatch, useSelector } from 'react-redux'
import {getChildById,getChildrenInfo,toggleForm} from "../../../redux/childrenService/ChildrenServiceAction"
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



function ChildrenServicePage() {
    const dispatch = useDispatch()

    const {childrenInfo,hideForm} = useSelector((state) => state.childrenService)

    console.log({childrenInfo});

   

    useEffect(() => {
    
       dispatch(getChildrenInfo())
    }, [])


    return (
        <div className=" m-sm-30 mt-6">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Membership', path: '/members/children' },
                        { name: 'Children Service' },
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
                                            style={{ fontSize: 13,float:"left", width:'80%' }}
                                        />
                                        <span style={{ float: 'left',marginTop:-5 }}>
                                            <IconButton>
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
                                        onClick={()=> dispatch(toggleForm())}
                                    >
                                        <Icon>person</Icon>
                                        <span className="pl-2 capitalize">
                                            Add Member
                                        </span>
                                    </Button>
                                </Grid>
                            </Grid>

                            <ChildrenTable data={data} />
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
                            style={{ height: '395px' }}
                            raised
                        >
                            <ImagePreviewComponent />
                        </Card>
                    </Grid>
                    <Grid item lg={8} xl={8} xs={12} md={8}>
                        <Card className="px-6 pt-2 pb-4 mb-3" raised>
                            <AddForm/>
                        </Card>
                    </Grid>
                </Grid>
            )}
        </div>
    )
}

export default ChildrenServicePage
