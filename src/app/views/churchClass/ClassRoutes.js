// import NotFound from './NotFound'
import React from 'react'

const classRoutes = [
    {
        path: '/class/add',
        component: React.lazy(() => import('./Class/ClassPage')),
    },
    {
        path: '/class/members',
        component: React.lazy(() => import('./classmembers/ClassMembersPage')),
    },
]

export default classRoutes
