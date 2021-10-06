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
    {
        path: '/class/children',
        component: React.lazy(() => import('./childrenClass/ChildrenClassPage')),
    },
]

export default classRoutes
