import React,{useEffect} from 'react'
import { Breadcrumb } from 'app/components'
import { Icon, Button, IconButton, Fab,Grid, Card } from '@material-ui/core'
import AttendanceTable from 'app/components/tables/attendanceTable'
import OperationTable from 'app/components/tables/operationTable'
import {useDispatch,useSelector} from "react-redux"
import {getOperationTypes} from "../../../redux/operations/operationsActions"

function OrganisationAttendancePage() {
    const dispatch = useDispatch();

    const {operationTypes} = useSelector((state) => state.churchOperation)
    console.log({operationTypes})
    useEffect(() => {
      dispatch(getOperationTypes())
    }, []);
    

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
                       
                        <AttendanceTable columnName="Organisation" data={operationTypes }/>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrganisationAttendancePage
