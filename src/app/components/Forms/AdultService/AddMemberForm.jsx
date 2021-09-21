import React, { useState, useEffect } from 'react'
import {
    ValidatorForm,
    TextValidator,
    SelectValidator,
} from 'react-material-ui-form-validator'
import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
} from '@material-ui/core'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'

const AddMemberForm = () => {
    const [state, setState] = useState({
        date: null,
    })

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    const {
        username,
        firstName,
        lastName,
        creditCard,
        mobile,
        password,
        confirmPassword,
        gender,
        date,
        others,
        birthDate,
        mirritalStatus,
        email,

        occupation,
        location,
    } = state

    return (
        <div style={{ width: '60vw' }}>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="First Name"
                            onChange={handleChange}
                            type="text"
                            name="firstName"
                            value={firstName || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            errorMessages={['this field is required']}
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <TextValidator
                            variant="outlined"
                            size="small"
                            className="mb-4 w-full"
                            label="Last Name"
                            onChange={handleChange}
                            type="text"
                            name="lastName"
                            value={lastName || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="Others (Optional)"
                            onChange={handleChange}
                            type="text"
                            name="Others"
                            value={others || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={6}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <SelectValidator
                            className="mb-4 w-full"
                            label="Gender"
                            onChange={handleChange}
                            type="select"
                            name="gender"
                            value={gender || ''}
                            variant="outlined"
                            size="small"
                        />
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                className="mb-4 w-full"
                                margin="none"
                                id="mui-pickers-date"
                                label="Birth Date"
                                inputVariant="outlined"
                                type="text"
                                autoOk={false}
                                value={date}
                                size="small"
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <TextValidator
                            variant="outlined"
                            size="small"
                            className="mb-4 w-full"
                            label="Marrital Status"
                            onChange={handleChange}
                            type="text"
                            name="mirritalStatus"
                            value={mirritalStatus || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={6}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="Location"
                            onChange={handleChange}
                            type="text"
                            name="location"
                            value={location || ''}
                            variant="outlined"
                            size="small"
                        />
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <TextValidator
                            variant="outlined"
                            size="small"
                            className="mb-4 w-full"
                            label="Mobile Number"
                            onChange={handleChange}
                            type="text"
                            name="mobile"
                            value={mobile || ''}
                            validators={[
                                'required',
                                'minStringLength:10',
                                'maxStringLength: 10',
                            ]}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <TextValidator
                            variant="outlined"
                            size="small"
                            className="mb-4 w-full"
                            label="Occupation"
                            onChange={handleChange}
                            type="text"
                            name="occupation"
                            value={occupation || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={6}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="Location"
                            onChange={handleChange}
                            type="text"
                            name="location"
                            value={location || ''}
                            variant="outlined"
                            size="small"
                        />
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <TextValidator
                            variant="outlined"
                            size="small"
                            className="mb-4 w-full"
                            label="Mobile Number"
                            onChange={handleChange}
                            type="text"
                            name="mobile"
                            value={mobile || ''}
                            validators={[
                                'required',
                                'minStringLength:10',
                                'maxStringLength: 10',
                            ]}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <TextValidator
                            variant="outlined"
                            size="small"
                            className="mb-4 w-full"
                            label="Occupation"
                            onChange={handleChange}
                            type="text"
                            name="occupation"
                            value={occupation || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                </Grid>

                <Button color="secondary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <span className="pl-2 capitalize">Submit</span>
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default AddMemberForm