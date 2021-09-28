import React, { useRef, useState } from 'react'
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

function ChildrenServicePage() {
    const [openModal, setopenModal] = useState(false)
    const submitActionBtn = useRef(null)
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
                        { name: 'Membership', path: '/members/children' },
                        { name: 'Adult Service' },
                    ]}
                />
            </div>
            {openModal ? (
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Card className="px-6 pt-2 pb-4 mb-3">
                            <Grid container spacing={3}>
                                <Grid item lg={3} md={3} sm={12} xs={12}>
                                    <div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Search by firstname"
                                        />
                                        <span>
                                            <IconButton>
                                                <Icon color="primary">
                                                    search
                                                </Icon>
                                            </IconButton>
                                        </span>
                                    </div>
                                </Grid>

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
                            style={{ height: '362px' }}
                        >
                            <ImagePreviewComponent />
                        </Card>
                    </Grid>
                    <Grid item lg={8} xl={8} xs={12} md={8}>
                        <Card className="px-6 pt-2 pb-4 mb-3">
                            <AddForm
                                setopenModal={setopenModal}
                                submitActionBtn={submitActionBtn}
                            />
                        </Card>
                    </Grid>
                </Grid>
            )}
        </div>
    )
}

export default ChildrenServicePage
