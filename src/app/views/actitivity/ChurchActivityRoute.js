import React from 'react'

const ChurchActivityRoute = [
    {
        path: '/activity/add',
        component: React.lazy(() => import('./activity/AddActivityPage')),
    },
    {
        path: '/activity/view',
        component: React.lazy(() => import('./view/ViewActityPage')),
    },
]

export default ChurchActivityRoute
