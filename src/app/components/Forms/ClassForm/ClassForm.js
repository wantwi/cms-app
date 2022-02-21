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
import { useSelector } from 'react-redux'
import { removeExtraSpace } from 'app/views/utilities/helper'

import './ClassForm.css'

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
let m

const ClassForm = ({ submitActionBtn, setopenModal }) => {
    const [focus, setfocus] = useState(false)

    const { membersInfo } = useSelector((state) => state.adultService)

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
                    <Grid item lg={8} md={8} sm={6} xs={12}>
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
                    <Grid item lg={4} md={4} sm={6} xs={12}>
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
                    <Grid item lg={12} md={12} sm={12} xs={12}>
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
                                {membersInfo.map((x) => (
                                    <MenuItem key={x.id} value={x.id}>
                                        {removeExtraSpace(
                                            `${x.firstName} ${x.others} ${x.lastName}`
                                        )}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
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

export default ClassForm
