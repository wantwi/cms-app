import React from 'react'
import { Grid, Card } from '@material-ui/core'
import { Breadcrumb } from 'app/components'
import ClassesTable from 'app/components/tables/ClassesTable'
import ClassMembersTable from 'app/components/tables/ClassMembersTable'
function ClassMembersPage() {
    return (
        <div className=" m-sm-30 mt-6">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Class', path: '/class/members' },
                        { name: 'Class Members' },
                    ]}
                />
            </div>
            <Card style={{ padding: '25px' }}>
                <Grid container spacing={3}>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        <ClassesTable
                            data={[{ className: 'Love CLass', members: 48 }]}
                        />
                    </Grid>
                    <Grid item lg={7} md={7} sm={12} xs={12}>
                        <ClassMembersTable data={[]} />
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default ClassMembersPage
