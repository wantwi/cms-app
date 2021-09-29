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
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { useFormik } from 'formik'
import * as yup from 'yup'


const INITIAL_MEMBER_FROM = {
    firstName: '',
    lastName: '',
    mobile: '',
    gender: '',
    date: new Date(),
    others: '',
    birthDate: '',
    mirritalStatus: '',
    occupation: '',
    location: '',
    emContact: '',
    contactName: '',
    organisation: [],
}

let schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    gender: yup.string().required('Gender is required'),
    date: yup.date().required(),
    mobile: yup.number(),
})

const AddMemberForm = ({ submitActionBtn,setopenModal }) => {
    const [date, setDate] = useState(INITIAL_MEMBER_FROM.date)

    const [orgs, setOrgs] = React.useState(INITIAL_MEMBER_FROM.organisation)

    const handleMultiChange = (event) => {
        const {
            target: { value },
        } = event
        setOrgs(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value
        )
    }

    const handleDateChange = (d) => {
        setDate(d)
    }

    const formik = useFormik({
        initialValues: INITIAL_MEMBER_FROM,
        validationSchema: schema,
        onSubmit: (values) => {
            values.organisation = orgs
            console.log(JSON.stringify(values, null, 2))
        },
    })

    return (
        <div >
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={4}>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
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
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <TextField
                            size="small"
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
                        />
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <TextField
                            className="mb-4 w-full"
                            label="Others (Optional)"
                            type="text"
                            name="others"
                            size="small"
                            onChange={formik.handleChange}
                            value={formik.values.others}
                            error={
                                formik.touched.others &&
                                Boolean(formik.errors.others)
                            }
                            helperText={
                                formik.touched.others && formik.errors.others
                            }
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={6}>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Gender
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                size="small"
                                label="Gender"
                                name="gender"
                                onChange={formik.handleChange}
                                value={formik.values.gender}
                                error={
                                    formik.touched.gender &&
                                    Boolean(formik.errors.gender)
                                }
                                helpertext={
                                    formik.touched.gender &&
                                    formik.errors.gender
                                }
                            >
                                <MenuItem value={10}>Male</MenuItem>
                                <MenuItem value={20}>Female</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                className="mb-4 w-full"
                                margin="none"
                                id="mui-pickers-date"
                                label="Date picker"
                                inputVariant="standard"
                                type="text"
                                autoOk={true}
                                value={date}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                // value={formik.values.birthDate}
                                // error={
                                //     formik.touched.birthDate &&
                                //     Boolean(formik.errors.birthDate)
                                // }
                                // helpertext={
                                //     formik.touched.gender &&
                                //     formik.errors.gender
                                // }
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <TextField
                            size="small"
                            className="mb-4 w-full"
                            label="Marrital Status"
                            type="text"
                            name="mirritalStatus"
                            onChange={formik.handleChange}
                            value={formik.values.mirritalStatus}
                            error={
                                formik.touched.mirritalStatus &&
                                Boolean(formik.errors.mirritalStatus)
                            }
                            helpertext={
                                formik.touched.mirritalStatus &&
                                formik.errors.mirritalStatus
                            }
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={6}>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <TextField
                            className="mb-4 w-full"
                            label="Location"
                            type="text"
                            name="location"
                            size="small"
                            onChange={formik.handleChange}
                            value={formik.values.location}
                            error={
                                formik.touched.location &&
                                Boolean(formik.errors.location)
                            }
                            helpertext={
                                formik.touched.location &&
                                formik.errors.location
                            }
                        />
                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <TextField
                            size="small"
                            className="mb-4 w-full"
                            label="Mobile Number"
                            type="text"
                            name="mobile"
                            onChange={formik.handleChange}
                            value={formik.values.mobile}
                            error={
                                formik.touched.mobile &&
                                Boolean(formik.errors.mobile)
                            }
                            helpertext={
                                formik.touched.mobile && formik.errors.mobile
                            }
                        />
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <TextField
                            size="small"
                            className="mb-4 w-full"
                            label="Occupation"
                            type="text"
                            name="occupation"
                            onChange={formik.handleChange}
                            value={formik.values.occupation}
                            error={
                                formik.touched.occupation &&
                                Boolean(formik.errors.occupation)
                            }
                            helpertext={
                                formik.touched.occupation &&
                                formik.errors.occupation
                            }
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={6}>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Organisation
                            </InputLabel>
                            <Select
                                fullWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                size="small"
                                multiple
                                label="Organisation"
                                name="organisation"
                                onChange={handleMultiChange}
                                value={orgs}
                                // error={
                                //     formik.touched.organisation &&
                                //     Boolean(formik.errors.organisation)
                                // }
                                // helpertext={
                                //     formik.touched.organisation &&
                                //     formik.errors.organisation
                                // }
                            >
                                <MenuItem value="NA">No organisation</MenuItem>
                                <MenuItem value="Youth">Youth</MenuItem>
                                <MenuItem value="Brigade">Brigade</MenuItem>
                                <MenuItem value="Guild">Guild</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <TextField
                            className="mb-4 w-full"
                            label="Emergency Contact"
                            type="text"
                            name="emContact"
                            size="small"
                            onChange={formik.handleChange}
                            value={formik.values.emContact}
                            error={
                                formik.touched.emContact &&
                                Boolean(formik.errors.emContact)
                            }
                            helpertext={
                                formik.touched.emContact &&
                                formik.errors.emContact
                            }
                        />
                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <TextField
                            className="mb-4 w-full"
                            label="Contact Name"
                            type="text"
                            name="contactName"
                            size="small"
                            onChange={formik.handleChange}
                            value={formik.values.contactName}
                            error={
                                formik.touched.contactName &&
                                Boolean(formik.errors.contactName)
                            }
                            helpertext={
                                formik.touched.yearOfJoining &&
                                formik.errors.yearOfJoining
                            }
                        />
                    </Grid>
                </Grid>

                <div style={{marginTop:30}}>
                <Button
                    onClick={()=>setopenModal(true)}
                    color="primary"
                    variant="contained"
                    type="submit"
                    style={{float:"right"}}
                >
                    <Icon>save</Icon>
                    <span className="pl-2 capitalize">Submit</span>
                </Button>
                <Button
                    onClick={()=>setopenModal(true)}
                    color="inherit"
                    variant="contained"
                    type="button"
                    style={{float:"right", marginRight:20}}
                >
                    <Icon>cancel</Icon>
                    <span className="pl-2 capitalize">Cancel</span>
                </Button>
                </div>
            </form>
        </div>
    )
}

export default AddMemberForm
