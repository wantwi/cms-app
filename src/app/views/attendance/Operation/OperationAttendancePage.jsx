import React from 'react'
import { Breadcrumb } from 'app/components'
import { Icon, Button, IconButton, Fab,Grid, Card } from '@material-ui/core'
import AttendanceTable from 'app/components/tables/attendanceTable'
import OperationTable from 'app/components/tables/operationTable'


function OrganisationAttendancePage() {
    return (
        <div className=" m-sm-30 mt-6">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        {
                            name: 'Attendance',
                            path: '/attendance/organisation',
                        },
                        { name: 'Organisation' },
                    ]}
                />
            </div>
            <Grid container spacing={3}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Card className="px-6 pt-2 pb-4 mb-3" raised>
                       
                        <AttendanceTable columnName="Organisation" data={[{name:'Test',Week:"WEEK 1", number:20},{name:'Test1',Week:"WEEK 2", number:20},{name:'Test2',Week:"WEEK 1", number:20}] }/>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrganisationAttendancePage
