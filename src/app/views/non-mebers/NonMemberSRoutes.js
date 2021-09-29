import React from 'react'

const nonMembersRoutes = [
    {
        path: '/nonmembers/visitor',
        component: React.lazy(() => import('./visitor/VisitorPage')),
    },
    {
        path: '/nonmembers/transfer',
        component: React.lazy(() =>
            import('./transfer/TransfredMembersPage')
        ),
    },
]
export default nonMembersRoutes
