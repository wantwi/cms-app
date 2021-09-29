import React, { useRef, useState } from 'react'

import { Breadcrumb } from 'app/components'
import Image from '../001-man.svg'
import { Icon, Button, IconButton, Fab,Grid, Card } from '@material-ui/core'

import CustomTableComponent from 'app/components/tables/CustomTableComponent'
import './AdultServicePage.css'
import FormModal from 'app/components/CustomizedDialog/FormModal'
import AddMemberForm from 'app/components/Forms/AdultService/AddMemberForm'
import { useAppState } from '../../../../stateManager/AppStateProvider'
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

const commands = ({ name }) => {
    console.log(name)
}

function AdultServicePage() {
    const [openModal, setopenModal] = useState(true)
    const submitActionBtn = useRef(null)

    const [state, dispatch] = useAppState()

    console.log({ state })

    console.log({ dispatch })

    const handleClickOpen = () => {
        setopenModal(!openModal)
    }

    const saveActionHandler = () => {
        submitActionBtn.current.click()
        console.log({ submitActionBtn })
       
    }

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

            {openModal ? (
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
                                        onClick={handleClickOpen}
                                    >
                                        <Icon>person</Icon>
                                        <span className="pl-2 capitalize">
                                            Add Member
                                        </span>
                                    </Button>
                                </Grid>
                            </Grid>

                            <CustomTableComponent data={data} />
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

                            <ImagePreviewComponent/>
                        </Card>
                    </Grid>
                    <Grid item lg={8} xl={8} xs={12} md={8}>
                        <Card className="px-6 pt-2 pb-4 mb-3" raised>
                            <AddMemberForm    setopenModal={setopenModal} submitActionBtn={submitActionBtn} />
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
