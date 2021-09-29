import React, { useRef, useState } from 'react'
import { Grid, Card } from '@material-ui/core'
import { Breadcrumb } from 'app/components'

import { Icon, Button, IconButton, Fab } from '@material-ui/core'

import ClassTable from 'app/components/tables/ClassTable'


import ClassForm from 'app/components/Forms/ClassForm/ClassForm'

const commands = ({ name }) => {
    console.log(name)
}

function TransfredMembersPage() {

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

          
                <Grid container spacing={3}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Card className="px-6 pt-2 pb-4 mb-3">
                        <Grid container spacing={3}>
                            <Grid item lg={4} md={4} sm={12} xs={12}>
                                <div>
                                    <input
                                        className="form-control fw-8"
                                        type="text"
                                        placeholder="Search by firstname"
                                    />
                                    <span style={{ float: 'left' }}>
                                        <IconButton>
                                            <Icon color="primary">
                                                search
                                            </Icon>
                                        </IconButton>
                                    </span>
                                </div>
                            </Grid>

                            
                        </Grid>

                        <ClassTable data={[]} />
                    </Card>
                </Grid>
            </Grid>
         
        </div>
    )
}






export default TransfredMembersPage
