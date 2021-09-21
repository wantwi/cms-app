// import NotFound from './NotFound'
import React from 'react'

const membersRoutes = [
    {
        path: '/members/adult',
        component: React.lazy(() => import('./AdultService/AdultServicePage')),
    },
    {
        path: '/members/children',
        component: React.lazy(() =>
            import('./childrenService/ChildrenServicePage')
        ),
    },
]

export default membersRoutes
