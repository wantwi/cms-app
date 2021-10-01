import { authRoles } from './auth/authRoles'

export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
    },

    {
        name: 'Church Activity',
        path: '/activity/view',
        icon: 'event',
    },
    {
        label: 'Membership',
        type: 'label',
    },
    {
        name: 'Members',
        icon: 'people',
        children: [
            {
                name: 'Adult Service',
                iconText: 'SI',
                path: '/members/Adult',
            },
            {
                name: 'Children Service',
                iconText: 'SU',
                path: '/members/Children',
            },
        ],
    },
    {
        name: 'Class',
        icon: 'store',
        children: [
            {
                name: 'Add Class',
                iconText: 'SI',
                path: '/class/add',
            },
            {
                name: 'Class Members',
                iconText: 'SU',
                path: '/class/members',
            },
        ],
    },
    {
        name: 'Committee',
        icon: 'people_outline',
        children: [
            {
                name: 'Add Committee',
                iconText: 'SI',
                path: '/committee/add',
            },
            // {
            //     name: 'Committee Members',
            //     iconText: 'SU',
            //     path: '/committee/members',
            // },
        ],
    },
    // {
    //     name: 'Session/Auth',
    //     icon: 'security',
    //     children: [
    //         {
    //             name: 'Sign in',
    //             iconText: 'SI',
    //             path: '/session/signin',
    //         },
    //         {
    //             name: 'Sign up',
    //             iconText: 'SU',
    //             path: '/session/signup',
    //         },
    //         {
    //             name: 'Forgot Password',
    //             iconText: 'FP',
    //             path: '/session/forgot-password',
    //         },
    //         {
    //             name: 'Error',
    //             iconText: '404',
    //             path: '/session/404',
    //         },
    //     ],
    // },
    {
        label: 'Non Membership',
        type: 'label',
    },
    {
        name: 'Non Membership',
        icon: 'people',
        children: [
            {
                name: 'Visitor',
                iconText: 'SI',
                path: '/nonmembers/visitor',
            },
            {
                name: 'Transfered Members',
                iconText: 'SI',
                path: '/nonmembers/transfer',
            },
        ],
    },
     {
        label: 'Operation',
        type: 'label',
    },
    {
        name: 'Attendance',
        icon: 'list',
        children: [
            {
                name: 'Church Operation',
                iconText: 'SI',
                path: '/attendance/operation',
            },
            {
                name: 'View Operation',
                iconText: 'eye',
                path: '/attendance/view',
            },
           
        ],
    },
    // {
    //     label: 'Church Activity',
    //     type: 'label',
    // },
    // {
    //     name: 'Activity',
    //     icon: 'event',
    //     children: [
           
    //         {
    //             name: 'View Activity',
    //             iconText: 'SI',
    //             path: '/activity/view',
    //         },
    //     ],
    // },

    // {
    //     label: 'Components',
    //     type: 'label',
    // },
    // {
    //     name: 'Components',
    //     icon: 'favorite',
    //     badge: { value: '30+', color: 'secondary' },
    //     children: [
    //         {
    //             name: 'Auto Complete',
    //             path: '/material/autocomplete',
    //             iconText: 'A',
    //         },
    //         {
    //             name: 'Buttons',
    //             path: '/material/buttons',
    //             iconText: 'B',
    //         },
    //         {
    //             name: 'Checkbox',
    //             path: '/material/checkbox',
    //             iconText: 'C',
    //         },
    //         {
    //             name: 'Dialog',
    //             path: '/material/dialog',
    //             iconText: 'D',
    //         },
    //         {
    //             name: 'Drag and Drop',
    //             iconText: 'D',
    //             path: '/others/drag-and-drop',
    //         },
    //         {
    //             name: 'Expansion Panel',
    //             path: '/material/expansion-panel',
    //             iconText: 'E',
    //         },
    //         {
    //             name: 'Form',
    //             path: '/material/form',
    //             iconText: 'F',
    //         },
    //         {
    //             name: 'Icons',
    //             path: '/material/icons',
    //             iconText: 'I',
    //         },
    //         {
    //             name: 'Menu',
    //             path: '/material/menu',
    //             iconText: 'M',
    //         },
    //         {
    //             name: 'Progress',
    //             path: '/material/progress',
    //             iconText: 'P',
    //         },
    //         {
    //             name: 'Radio',
    //             path: '/material/radio',
    //             iconText: 'R',
    //         },
    //         {
    //             name: 'Switch',
    //             path: '/material/switch',
    //             iconText: 'S',
    //         },
    //         {
    //             name: 'Slider',
    //             path: '/material/slider',
    //             iconText: 'S',
    //         },
    //         {
    //             name: 'Snackbar',
    //             path: '/material/snackbar',
    //             iconText: 'S',
    //         },
    //         {
    //             name: 'Table',
    //             path: '/material/table',
    //             iconText: 'T',
    //         },
    //     ],
    // },
    // {
    //     name: 'Utilities',
    //     icon: 'format_list_bulleted',
    //     children: [
    //         {
    //             name: 'Color',
    //             path: '/utilities/color',
    //             iconText: 'C',
    //             auth: authRoles.admin,
    //         },
    //         {
    //             name: 'Spacing',
    //             path: '/utilities/spacing',
    //             iconText: 'S',
    //             auth: authRoles.admin,
    //         },
    //         {
    //             name: 'Typography',
    //             path: '/utilities/typography',
    //             iconText: 'T',
    //         },
    //         {
    //             name: 'Display',
    //             path: '/utilities/display',
    //             iconText: 'D',
    //         },
    //         {
    //             name: 'Position',
    //             path: '/utilities/position',
    //             iconText: 'P',
    //         },
    //         {
    //             name: 'Shadow',
    //             path: '/utilities/shadow',
    //             iconText: 'S',
    //         },
    //     ],
    // },
    // {
    //     name: 'Charts',
    //     icon: 'trending_up',
    //     children: [
    //         {
    //             name: 'Echarts',
    //             path: '/charts/echarts',
    //             iconText: 'E',
    //         },
    //     ],
    // },
    // {
    //     name: 'Documentation',
    //     icon: 'launch',
    //     type: 'extLink',
    //     path: 'http://demos.ui-lib.com/matx-react-doc/',
    // },
]
