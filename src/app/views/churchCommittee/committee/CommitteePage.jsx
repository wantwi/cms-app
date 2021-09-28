import React, { useRef, useState } from 'react'
import { Grid, Card } from '@material-ui/core'
import { Breadcrumb } from 'app/components'

import { Icon, Button, IconButton, Fab } from '@material-ui/core'

import ClassTable from 'app/components/tables/ClassTable'
import CommitteeTable from 'app/components/tables/CommitteeTable'

function CommitteePage() {
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
                        { name: 'Membership', path: '/members/adult' },
                        { name: 'Adult Service' },
                    ]}
                />
            </div>

            <Grid container spacing={3}>
                <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                    <Card className="px-6 pt-2 pb-4 mb-3">
                        <CommitteeTable data={[]} />
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

export default CommitteePage
