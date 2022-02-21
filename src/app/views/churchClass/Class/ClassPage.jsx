import React, { useRef, useState,useEffect } from 'react'
import { Grid, Card } from '@material-ui/core'
import { Breadcrumb } from 'app/components'
import { CLASS_DATA } from './FakeClassData'
import { Icon, Button, IconButton, Fab } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { getMemberInfo } from 'app/redux/adultService/AdultServiceActions'

// import {
//     Button,
//     Icon,
//     Grid,
//     Radio,
//     RadioGroup,
//     FormControlLabel,
//     Checkbox,
// } from '@material-ui/core'
import ClassTable from 'app/components/tables/ClassTable'

import FormModal from 'app/components/CustomizedDialog/FormModal'
import ClassForm from 'app/components/Forms/ClassForm/ClassForm'

import './ClassPage.css'

const commands = ({ name }) => {
    console.log(name)
}

function ClassPage() {
    const dispatch = useDispatch()
    const [openModal, setopenModal] = useState(true)
    const submitActionBtn = useRef(null)
    const handleClickOpen = () => {
        setopenModal(!openModal)
    }

    const saveActionHandler = () => {
        submitActionBtn.current.click()
        console.log({ submitActionBtn })
    }

      
    useEffect(() => {

         
        dispatch(getMemberInfo())

      
       
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

            {openModal ? (
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Card className="px-6 pt-2 pb-4 mb-3">
                            <Grid container spacing={3}>
                                <Grid item lg={4} md={4} sm={12} xs={12}>
                                    <div>
                                        <input
                                            className="form-control fw-8"
                                            type="text"
                                            placeholder="Search by class name"
                                            style={{ fontSize: 13 }}
                                        />
                                        <span
                                            style={{
                                                float: 'left',
                                                marginTop: -5,
                                            }}
                                        >
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
                                            Add Class
                                        </span>
                                    </Button>
                                </Grid>
                            </Grid>

                            <ClassTable data={[]} />
                        </Card>
                    </Grid>
                </Grid>
            ) : (
                <Grid
                    container
                    spacing={2}
                    style={{ width: '50vw', margin: '0 auto' }}
                >
                    <Grid item lg={8} xl={8} xs={12} md={12}>
                        <Card raised className="px-6 pt-2 pb-4 mb-3">
                            <ClassForm
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

export default ClassPage
