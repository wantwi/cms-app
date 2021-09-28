import React from 'react'
import { Breadcrumb } from 'app/components'
import { Button, Icon } from '@material-ui/core'
function CommitteePage() {
    return (
        <div className=" m-sm-30 mt-6">
        <div className="mb-sm-30">
            <Breadcrumb
                routeSegments={[
                    { name: 'Membership', path: '/committee/add' },
                    { name: 'Commitee' },
                ]}
            />
        </div>
            <Button>Save</Button>
        </div>
    )
}

export default CommitteePage
