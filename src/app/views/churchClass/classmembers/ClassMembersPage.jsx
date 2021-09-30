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
           
                <Grid container spacing={3}>
               
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                    <Card style={{ padding: '25px' }} raised>
                    <ClassesTable
                            data={[{ className: 'Love CLass', members: 48 }]}
                        />

                    </Card>
                        
                    </Grid>
                    <Grid item lg={7} md={7} sm={12} xs={12}>
                    <Card style={{ padding: '25px' }} raised>
                    <ClassMembersTable data={[]} />
                    </Card>
                       
                    </Grid>
                </Grid>
            
        </div>
    )
}

export default ClassMembersPage
