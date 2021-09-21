import React from 'react'

const churchcommiteeRoutes = [
    {
        path: '/committee/add',
        component: React.lazy(() => import('./committee/CommitteePage')),
    },
    {
        path: '/committee/members',
        component: React.lazy(() =>
            import('./committeeMembers/CommitteeMembersPage')
        ),
    },
]

export default churchcommiteeRoutes
