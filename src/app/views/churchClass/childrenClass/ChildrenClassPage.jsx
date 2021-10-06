import React, { useRef, useState } from 'react'
import { Grid, Card } from '@material-ui/core'
import { Breadcrumb } from 'app/components'

import { Icon, Button, IconButton, Fab } from '@material-ui/core'

import ClassTable from 'app/components/tables/ClassTable'
import CommitteeTable from 'app/components/tables/CommitteeTable'
import ClassesTable from 'app/components/tables/ClassesTable'


function ChildrenClassPage() {
 
   
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
                    <ClassesTable
                            data={[{ className: 'Love CLass', members: 48 }]}
                        />

                    </Card>
                </Grid>

                <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                    <Card className="px-6 pt-2 pb-4 mb-3">
                        <ClassTable data={[]} />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}



export default ChildrenClassPage
