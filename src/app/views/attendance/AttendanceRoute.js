import React from 'react'

const AttendanceRoute = [
    {
        path: '/attendance/operation',
        component: React.lazy(() => import('./Operation/OperationAttendancePage')),
    },
    {
        path: '/attendance/view',
        component: React.lazy(() => import('./ViewOperation/ViewOperationPage')),
    },
  
]



export default AttendanceRoute
