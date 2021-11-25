import React, { useRef, useState,useEffect } from 'react'
import { Grid, Card } from '@material-ui/core'
import { Breadcrumb } from 'app/components'

import {useDispatch,useSelector} from "react-redux"
import ClassTable from 'app/components/tables/ClassTable'
import CommitteeTable from 'app/components/tables/CommitteeTable'
import {addCommittee,getCommittees} from "../../../redux/adultService/AdultServiceActions"

function CommitteePage() {
    const dispatch = useDispatch()
    const {committees,committeeMembers} = useSelector(state =>state.adultService)

  

    useEffect(() => {
        dispatch(getCommittees())
       }, [])

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
                        <CommitteeTable data={committees} />
                    </Card>
                </Grid>

                <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                    <Card className="px-6 pt-2 pb-4 mb-3">
                        <ClassTable data={committeeMembers} />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default CommitteePage
