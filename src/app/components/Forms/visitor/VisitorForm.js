import React, { useState, useEffect } from 'react'

import {
    Button,
    Icon,
    Grid,
    TextField,
    InputLabel,
    FormControl,
    MenuItem,
    Select,
} from '@material-ui/core'
// import AdapterDateFns from '@mui/lab/AdapterDateFns'
// import LocalizationProvider from '@mui/lab/LocalizationProvider'
// import TimePicker from '@mui/lab/TimePicker'
import 'date-fns'
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars'



import { useFormik } from 'formik'
import * as yup from 'yup'

const INITIAL_MEMBER_FROM = {
    className: '',
    classLeader: '',
    deputyClassLeader: '',
    status: '',
    meetingDays: [],
    dateRange: '',
}

const days = [
    'Sunday',
    'Monday',
    'Tuuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Sataurday',
]

let schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('First name is required'),
    society: yup.string().required('Church or Society is required'),
    contact: yup.string().required('Active moblie number is required'),
    event: yup.string(),
})
let m

const VisitorForm = ({ submitActionBtn, setopenModal }) => {
    const [value, setValue] = React.useState(null)
    const [focus, setfocus] = useState(false)

    const formik = useFormik({
        initialValues: INITIAL_MEMBER_FROM,
        validationSchema: schema,
        onSubmit: (values) => {
            // values.organisation = orgs
            console.log(JSON.stringify(values, null, 2))
        },
    })

    const handlefieldFocus = () => {
        formik.values.dateRange.legth > 0 ? setfocus(false) : setfocus(true)
    }
    const handlefieldBlur = () => {
        formik.values.dateRange === '' ? setfocus(false) : setfocus(true)
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={4}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <TextField
                            className="mb-4 w-full"
                            label="First Name"
                            type="text"
                            name="firstName"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            error={
                                formik.touched.firstName &&
                                Boolean(formik.errors.firstName)
                            }
                            helperText={
                                formik.touched.firstName &&
                                formik.errors.firstName
                            }
                            size="small"
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <TextField
                            className="mb-4 w-full"
                            label="Last Name"
                            type="text"
                            name="lastName"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            error={
                                formik.touched.lastName &&
                                Boolean(formik.errors.lastName)
                            }
                            helperText={
                                formik.touched.lastName &&
                                formik.errors.lastName
                            }
                            size="small"
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <TextField
                            className="mb-4 w-full"
                            label="Mobile Number"
                            type="text"
                            name="contact"
                            onChange={formik.handleChange}
                            value={formik.values.contact}
                            error={
                                formik.touched.contact &&
                                Boolean(formik.errors.contact)
                            }
                            helperText={
                                formik.touched.contact && formik.errors.contact
                            }
                            size="small"
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <TextField
                            className="mb-4 w-full"
                            label="Church / Society"
                            type="text"
                            name="society"
                            onChange={formik.handleChange}
                            value={formik.values.society}
                            error={
                                formik.touched.society &&
                                Boolean(formik.errors.society)
                            }
                            helperText={
                                formik.touched.society && formik.errors.society
                            }
                            size="small"
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={6}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TextField
                            className="mb-4 w-full"
                            label="Event"
                            type="text"
                            name="event"
                            onChange={formik.handleChange}
                            value={formik.values.event}
                            error={
                                formik.touched.event &&
                                Boolean(formik.errors.event)
                            }
                            helperText={
                                formik.touched.event && formik.errors.event
                            }
                            size="small"
                        />
                    </Grid>
                </Grid>

                <div style={{ marginTop: 30 }}>
                    <Button
                        onClick={() => setopenModal(true)}
                        color="primary"
                        variant="contained"
                        type="submit"
                        style={{ float: 'right' }}
                    >
                        <Icon>save</Icon>
                        <span className="pl-2 capitalize">Submit</span>
                    </Button>
                    <Button
                        onClick={() => setopenModal(true)}
                        color="inherit"
                        variant="contained"
                        type="button"
                        style={{ float: 'right', marginRight: 20 }}
                    >
                        <Icon>cancel</Icon>
                        <span className="pl-2 capitalize">Cancel</span>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default VisitorForm
