import React, { useState, useEffect } from 'react'

import {
    Icon,
    Grid,
    TextField,
    InputLabel,
    FormControl,
    MenuItem,
    Select,
} from '@material-ui/core'
import { Button, Form } from 'react-bootstrap'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { useFormik } from 'formik'
import * as yup from 'yup'
import './AddMemberForm.css'
import FormikComponent from '../formikComponent/FormikComponent'

const INITIAL_MEMBER_FROM = {
    firstName: '',
    lastName: '',
    mobile: '',
    gender: '',

    others: '',
    birthDate: '',
    marritalStatus: '',
    occupation: '',
    location: '',
}
const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

let schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    gender: yup.string().required('Gender is required'),
    birthDate: yup.date().required('Select birth date'),
    mobile: yup
        .string()
        .matches(phoneRegExp, '*Mobile number is not valid')
        .required('*Mobile number required'),
    //mobile: yup.number(),
})

const AddMemberForm = ({ submitActionBtn }) => {
    const [state, setState] = useState({
        date: null,
    })

    const formik = useFormik({
        initialValues: INITIAL_MEMBER_FROM,
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2))
        },
    })

    return (
        <div style={{ width: '60vw' }}>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={4}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Form.Group controlId="">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                                className={
                                    formik.touched.firstName &&
                                    formik.errors.firstName
                                        ? 'error'
                                        : null
                                }
                            />
                            {formik.touched.firstName &&
                            formik.errors.firstName ? (
                                <div className="error-message">
                                    {formik.errors.firstName}
                                </div>
                            ) : null}
                        </Form.Group>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Form.Group controlId="formBlog">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                                className={
                                    formik.touched.lastName &&
                                    formik.errors.lastName
                                        ? 'error'
                                        : null
                                }
                            />
                            {formik.touched.lastName &&
                            formik.errors.lastName ? (
                                <div className="error-message">
                                    {formik.errors.lastName}
                                </div>
                            ) : null}
                        </Form.Group>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Form.Group controlId="formBlog">
                            <Form.Label>Others</Form.Label>
                            <Form.Control
                                type="text"
                                name="others"
                                placeholder="Others (optional)"
                                onChange={formik.handleChange}
                                value={formik.values.others}
                            />
                        </Form.Group>
                    </Grid>
                </Grid>

                <Grid container spacing={6}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Form.Group controlId="">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select
                                size="md"
                                name="gender"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.gender}
                                className={
                                    formik.touched.gender &&
                                    formik.errors.gender
                                        ? 'error'
                                        : null
                                }
                            >
                                <option value="">Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Form.Select>
                            {formik.touched.gender && formik.errors.gender ? (
                                <div className="error-message">
                                    {formik.errors.gender}
                                </div>
                            ) : null}
                        </Form.Group>
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Form.Group controlId="">
                            <Form.Label>Birth Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="birthDate"
                                placeholder="Last Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.birthDate}
                                className={
                                    formik.touched.birthDate &&
                                    formik.errors.birthDate
                                        ? 'error'
                                        : null
                                }
                            />
                            {formik.touched.birthDate &&
                            formik.errors.birthDate ? (
                                <div className="error-message">
                                    {formik.errors.birthDate}
                                </div>
                            ) : null}
                        </Form.Group>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Form.Group controlId="">
                            <Form.Label>Marrital Status</Form.Label>
                            <Form.Select
                                size="md"
                                name="marritalStatus"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.marritalStatus}
                                className={
                                    formik.touched.marritalStatus &&
                                    formik.errors.marritalStatus
                                        ? 'error'
                                        : null
                                }
                            >
                                <option value="">Marrital Status</option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                            </Form.Select>
                            {formik.touched.marritalStatus &&
                            formik.errors.marritalStatus ? (
                                <div className="error-message">
                                    {formik.errors.marritalStatus}
                                </div>
                            ) : null}
                        </Form.Group>
                    </Grid>
                </Grid>

                <Grid container spacing={4}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Form.Group controlId="">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                name="location"
                                placeholder="Location"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.location}
                                className={
                                    formik.touched.location &&
                                    formik.errors.location
                                        ? 'error'
                                        : null
                                }
                            />
                            {formik.touched.location &&
                            formik.errors.location ? (
                                <div className="error-message">
                                    {formik.errors.location}
                                </div>
                            ) : null}
                        </Form.Group>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Form.Group controlId="formBlog">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="mobile"
                                placeholder="Last Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.mobile}
                                className={
                                    formik.touched.mobile &&
                                    formik.errors.mobile
                                        ? 'error'
                                        : null
                                }
                            />
                            {formik.touched.mobile && formik.errors.mobile ? (
                                <div className="error-message">
                                    {formik.errors.mobile}
                                </div>
                            ) : null}
                        </Form.Group>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Form.Group controlId="formBlog">
                            <Form.Label>Occupation</Form.Label>
                            <Form.Control
                                type="text"
                                name="occupation"
                                placeholder="Cccupation (optional)"
                                onChange={formik.handleChange}
                                value={formik.values.occupation}
                            />
                        </Form.Group>
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

export default AddMemberForm
