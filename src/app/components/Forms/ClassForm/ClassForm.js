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
    className: yup.string().required('First name is required'),
    classLeader: yup.string().required('Last name is required'),
    status: yup.string().required('Gender is required'),
    deputyClassLeader: yup.date().required(),
    meetingDays: yup.number(),
})

const ClassForm = ({ submitActionBtn }) => {
    const [value, setValue] = React.useState(null)
    // const [date, setDate] = useState(INITIAL_MEMBER_FROM.date)

    // const [orgs, setOrgs] = React.useState(INITIAL_MEMBER_FROM.organisation)

    // const handleMultiChange = (event) => {
    //     const {
    //         target: { value },
    //     } = event
    //     setOrgs(
    //         // On autofill we get a the stringified value.
    //         typeof value === 'string' ? value.split(',') : value
    //     )
    // }

    // const handleDateChange = (d) => {
    //     setDate(d)
    // }

    const formik = useFormik({
        initialValues: INITIAL_MEMBER_FROM,
        validationSchema: schema,
        onSubmit: (values) => {
            // values.organisation = orgs
            console.log(JSON.stringify(values, null, 2))
        },
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={4}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <TextField
                            className="mb-4 w-full"
                            label="Class Name"
                            type="text"
                            name="className"
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
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Status
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                size="small"
                                label="Status"
                                name="status"
                                onChange={formik.handleChange}
                                value={formik.values.status}
                                error={
                                    formik.touched.status &&
                                    Boolean(formik.errors.status)
                                }
                                helpertext={
                                    formik.touched.status &&
                                    formik.errors.status
                                }
                            >
                                <MenuItem value="">Select Status</MenuItem>
                                <MenuItem value={1}>Active</MenuItem>
                                <MenuItem value={0}>Inactiv</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Select Class Leader
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                size="small"
                                label="Class Leader"
                                name="classLeader"
                                onChange={formik.handleChange}
                                value={formik.values.classLeader}
                                error={
                                    formik.touched.classLeader &&
                                    Boolean(formik.errors.classLeader)
                                }
                                helpertext={
                                    formik.touched.classLeader &&
                                    formik.errors.classLeader
                                }
                            >
                                <MenuItem value={10}>Not Available</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Select Deputy Class Leader
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                size="small"
                                label="Class Leader"
                                name="deputyClassLeader"
                                onChange={formik.handleChange}
                                value={formik.values.deputyClassLeader}
                                error={
                                    formik.touched.deputyClassLeader &&
                                    Boolean(formik.errors.deputyClassLeader)
                                }
                                helpertext={
                                    formik.touched.deputyClassLeader &&
                                    formik.errors.deputyClassLeader
                                }
                            >
                                <MenuItem value={10}>Not Available</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Select Meeting Day
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                size="small"
                                placeholder="Class Leader"
                                name="deputyClassLeader"
                                onChange={formik.handleChange}
                                value={formik.values.meetingDays}
                                error={
                                    formik.touched.meetingDays &&
                                    Boolean(formik.errors.meetingDays)
                                }
                                helpertext={
                                    formik.touched.meetingDays &&
                                    formik.errors.meetingDays
                                }
                            ></Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <TimePickerComponent format={{ skeleton: 'Hms' }} />
                        {/* <TextField
                            size="small"
                            className="mb-4 w-full"
                            label="Date"
                            type="text"
                            name="dateRange"
                            onChange={formik.handleChange}
                            value={formik.values.dateRange}
                            error={
                                formik.touched.dateRange &&
                                Boolean(formik.errors.dateRange)
                            }
                            helpertext={
                                formik.touched.dateRange &&
                                formik.errors.dateRange
                            }
                        /> */}
                    </Grid>
                </Grid>

                <Button
                    ref={submitActionBtn}
                    color="secondary"
                    variant="contained"
                    type="submit"
                >
                    <Icon>send</Icon>
                    <span className="pl-2 capitalize">Submit</span>
                </Button>
            </form>
        </div>
    )
}

export default ClassForm
