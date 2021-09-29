import React from 'react'
import { Redirect } from 'react-router-dom'

import dashboardRoutes from './views/dashboard/DashboardRoutes'
import utilitiesRoutes from './views/utilities/UtilitiesRoutes'

import materialRoutes from './views/material-kit/MaterialRoutes'
import chartsRoute from './views/charts/ChartsRoute'
import dragAndDropRoute from './views/Drag&Drop/DragAndDropRoute'

import formsRoutes from './views/forms/FormsRoutes'
import mapRoutes from './views/map/MapRoutes'
import membersRoutes from './views/members/MembersRoutes'
import classRoutes from './views/churchClass/ClassRoutes'
import churchcommiteeRoutes from './views/churchCommittee/churchcommiteeRoutes'
import ChurchActivityRoute from './views/actitivity/ChurchActivityRoute'
import nonMembersRoutes from './views/non-mebers/NonMemberSRoutes'


const redirectRoute = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/dashboard" />,
    },
]

const errorRoute = [
    {
        component: () => <Redirect to="/session/404" />,
    },
]

const routes = [
    ...dashboardRoutes,
    ...membersRoutes,
    ...classRoutes,
    ...churchcommiteeRoutes,
    ...ChurchActivityRoute,
    ...nonMembersRoutes,
    ...materialRoutes,
    ...utilitiesRoutes,
    ...chartsRoute,
    ...dragAndDropRoute,
    ...formsRoutes,
    ...mapRoutes,
    ...redirectRoute,
    ...errorRoute,
]

export default routes
