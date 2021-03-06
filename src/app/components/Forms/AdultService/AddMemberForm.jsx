import React, { useState, useEffect } from 'react'

import {
    Button,
    Icon,
    Grid,
  
    InputLabel,
    FormControl,
    MenuItem,
    Select,
    Switch,
    InputAdornment,
    Input,
    Checkbox,
    ListItemText,
  
} from '@mui/material'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { useFormik } from 'formik'
import * as yup from 'yup'

import * as MdIcons from 'react-icons/md'
import * as FaIcons from 'react-icons/fa'


import { useDispatch, useSelector } from 'react-redux'
import {
    getMemberInfo,
    registerMember,
    updateMember,
    toggleForm,
} from '../../../redux/adultService/AdultServiceActions'

const defaultRoles = [
    'Steward',
    'Leader',
    'Liturgist',
    'Usher',
    'Lay Preacher',
    'Sunday School Teacher',
    'Bible Reader',
    'Resisdent Minister',
    'Church Staff',
    'Interpreter',
]

const defaultOrgs =['Brigade','Youth Fellowship','Girls Fellowship','Men Fellowship','Guild']

let schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    gender: yup.string().required('Gender is required'),
    //birthDate: yup.date().required('This field is required')
    phoneNumber: yup.number().required('This field is required'),
    // birthDate: yup.date().required('This field is required'),
    emergencyContact: yup.string().required('This field is required'),
    emergencyName: yup.string().required('This field is required'),
    //birthDate: yup.date().required('This field is required'),
    role: yup.string(),
})

const AddMemberForm = ({imageUploadBtn}) => {
    const dispatch = useDispatch()
   

    const { memberInfo, hideForm } = useSelector((state) => state.adultService)

    const [date, setDate] = useState(memberInfo.birthDate)
   

    const [orgs, setOrgs] = React.useState([])

   

    const [isUpdate, setisUpdate] = useState(false)

    const [mRole, setMRole] = useState([])
    const [active, setActive] = useState(true)

    const handleMultiChange = (event, setFunc) => {
        const {
            target: { value },
        } = event
        setFunc(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value
        )
    }

    const handleDateChange = (d) => {
        setDate(d)
    }

    const formik = useFormik({
        initialValues: memberInfo,
        validationSchema: schema,
        onSubmit: (values) => {
            //  alert(values)
            values.birthDate = date
            values.organisation = orgs.toString()
            values.role = mRole.toString()
            values.image = imageUploadBtn.current.files[0]
        
          
            {
                active ? (values.status = 1) : (values.status = 0)
            }

            {
                !isUpdate
                    ? dispatch(registerMember(values))
                    : dispatch(updateMember(memberInfo.id, values))
            }

            // console.log(JSON.stringify(values, null, 2))
        },
    })

    useEffect(() => {
        if (
            memberInfo?.organisation.length > 0 ||"" &&
            memberInfo?.role.length > 0 ||""
        ) {
            setOrgs(memberInfo?.organisation)
            setDate(memberInfo?.birthDate)
            setMRole(memberInfo?.role)

            memberInfo.status == 1 ? setActive(true) : setActive(false)

            setisUpdate(true)
        } else {
            setisUpdate(false)
        }
    }, [memberInfo])

    return (
        <div style={{margin:'30px'}}>
       <form onSubmit={formik.handleSubmit}>
          
<Grid container spacing={4}>
    <Grid item lg={4} md={4} sm={4} xs={12}>
        <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="input-with-icon-adornment">
                First Name
            </InputLabel>
            <Input
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                        <FaIcons.FaUser />
                    </InputAdornment>
                }
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values?.firstName || ''}
                error={
                    formik.touched.firstName &&
                    Boolean(formik.errors.firstName)
                }
                helpertext={
                    formik.touched.firstName &&
                    formik.errors.firstName
                }
                size="small"
            />
        </FormControl>
    </Grid>
    <Grid item lg={4} md={4} sm={4} xs={12}>
        <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
                Last Name
            </InputLabel>
            <Input
                id=""
                startAdornment={
                    <InputAdornment position="start">
                        <FaIcons.FaUser />
                    </InputAdornment>
                }
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName || ''}
                error={
                    formik.touched.lastName &&
                    Boolean(formik.errors.lastName)
                }
                helpertext={
                    formik.touched.lastName &&
                    formik.errors.lastName
                }
                size="small"
            />
        </FormControl>
    </Grid>
    <Grid item lg={4} md={4} sm={4} xs={12}>
        <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
                others
            </InputLabel>
            <Input
                id=""
                startAdornment={
                    <InputAdornment position="start">
                        <FaIcons.FaUser />
                    </InputAdornment>
                }
                name="others"
                onChange={formik.handleChange}
                value={formik.values.others || ''}
                size="small"
            />
        </FormControl>
    </Grid>
</Grid>
<Grid container spacing={6}>
    <Grid item lg={4} md={4} sm={4} xs={12}>
        <FormControl fullWidth>
            <InputLabel htmlFor="input-with-icon-adornment">
                Gender
            </InputLabel>
            <Select
                labelId="gender"
                id="gender"
                name="gender"
                onChange={formik.handleChange}
                value={formik.values?.gender || ''}
                error={
                    formik.touched.gender &&
                    Boolean(formik.errors.gender)
                }
                helpertext={
                    formik.touched.gender &&
                    formik.errors.gender
                }
                input={
                    <Input
                        label="Gender"
                        startAdornment={
                            <InputAdornment position="start">
                                <FaIcons.FaTransgender />
                            </InputAdornment>
                        }
                    />
                }
                size="small"
            >
                <MenuItem disabled value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
            </Select>
        </FormControl>
    </Grid>

    <Grid item lg={4} md={4} sm={4} xs={12}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                className="mb-4 w-full"
                margin="none"
                id="mui-pickers-date"
                label="Birth Date"
                inputVariant="standard"
                type="text"
                autoOk={true}
                value={date}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    </Grid>
    <Grid item lg={4} md={4} sm={4} xs={12}>
        <FormControl fullWidth>
            <InputLabel htmlFor="input-with-icon-adornment">
                Marrital Status
            </InputLabel>
            <Select
                labelId="marritalStatus"
                id="marritalStatus"
                name="marritalStatus"
                onChange={formik.handleChange}
                value={formik.values?.marritalStatus || ''}
                error={
                    formik.touched.marritalStatus &&
                    Boolean(formik.errors.marritalStatus)
                }
                helpertext={
                    formik.touched.marritalStatus &&
                    formik.errors.marritalStatus
                }
                input={
                    <Input
                        label="Marrital Status"
                        startAdornment={
                            <InputAdornment position="start">
                                <FaIcons.FaCircle />
                            </InputAdornment>
                        }
                    />
                }
                size="small"
            >
                <MenuItem disabled value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
                <MenuItem value="Divorce">Divorce</MenuItem>
                <MenuItem value="Widow">Widow</MenuItem>
                <MenuItem value="Widower">Widower</MenuItem>
            </Select>
        </FormControl>
    </Grid>
</Grid>
<Grid container spacing={6}>
    <Grid item lg={4} md={4} sm={4} xs={12}>
        <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
            Address /Location
            </InputLabel>
            <Input
                id=""
                startAdornment={
                    <InputAdornment position="start">
                        <FaIcons.FaLocationArrow />
                    </InputAdornment>
                }
                name="address"
                onChange={formik.handleChange}
                value={formik.values?.address || ''}
                error={
                    formik.touched.address &&
                    Boolean(formik.errors.address)
                }
                helpertext={
                    formik.touched.address &&
                    formik.errors.address
                }
                size="small"
            />
        </FormControl>
    </Grid>

    <Grid item lg={4} md={4} sm={4} xs={12}>
        <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
                Mobile Number
            </InputLabel>
            <Input
                id="mobileNumber"
                startAdornment={
                    <InputAdornment position="start">
                        <FaIcons.FaMobile />
                    </InputAdornment>
                }
                name="phoneNumber"
                onChange={formik.handleChange}
                value={formik.values?.phoneNumber || ''}
                error={
                    formik.touched.phoneNumber &&
                    Boolean(formik.errors.phoneNumber)
                }
                helpertext={
                    formik.touched.phoneNumber &&
                    formik.errors.phoneNumber
                }
                size="small"
            />
        </FormControl>
    </Grid>
    <Grid item lg={4} md={4} sm={4} xs={12}>
        <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
                Occupation
            </InputLabel>
            <Input
                id="Occupation"
                startAdornment={
                    <InputAdornment position="start">
                        <MdIcons.MdWork />
                    </InputAdornment>
                }
                name="occupation"
                onChange={formik.handleChange}
                value={formik.values?.occupation || ''}
                error={
                    formik.touched.occupation &&
                    Boolean(formik.errors.occupation)
                }
                helpertext={
                    formik.touched.occupation &&
                    formik.errors.occupation
                }
                size="small"
            />
        </FormControl>
    </Grid>
</Grid>
<Grid container spacing={6}>
    <Grid item lg={4} md={4} sm={4} xs={12}>
        <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
                Year of Joining
            </InputLabel>
            <Input
                id="yearofJoining"
                startAdornment={
                    <InputAdornment position="start">
                        <FaIcons.FaCalendar />
                    </InputAdornment>
                }
                name="yearofJoining"
                onChange={formik.handleChange}
                input={<Input label="" />}
                value={formik.values?.yearofJoining || ''}
                error={
                    formik.touched.yearofJoining &&
                    Boolean(formik.errors.yearofJoining)
                }
                helpertext={
                    formik.touched.yearofJoining &&
                    formik.errors.yearofJoining
                }
                size="small"
            />
        </FormControl>
    </Grid>
    <Grid item lg={4} md={4} sm={4} xs={12}>
        <FormControl fullWidth>
            <InputLabel htmlFor="input-with-icon-adornment">
                Membership Status
            </InputLabel>
            <Select
                labelId="membershipStatus"
                id="membershipStatus"
                name="membershipStatus"
                onChange={formik.handleChange}
                input={<Input label="Membership Status" />}
                value={formik.values?.membershipStatus || ''}
                error={
                    formik.touched.membershipStatus &&
                    Boolean(formik.errors.membershipStatus)
                }
                helpertext={
                    formik.touched.membershipStatus &&
                    formik.errors.membershipStatus
                }
             
            >
                <MenuItem value="Full Member">
                    Full Member
                </MenuItem>
                <MenuItem value="Adherent">Adherent</MenuItem>
                <MenuItem value="Catchumen">Catchumen</MenuItem>
            </Select>
        </FormControl>
    </Grid>

    <Grid item lg={4} md={4} sm={4} xs={12}>
        <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="input-with-icon-adornment">
                Role
            </InputLabel>
            <Select
                fullWidth
                labelId="roleId"
                size="small"
                id="demo-multiple-checkbox"
                multiple
                value={mRole}
                name="role"
                error={
                    formik.touched.role &&
                    Boolean(formik.errors.role)
                }
                helpertext={
                    formik.touched.role &&
                    formik.errors.role
                }
                onChange={(e) => handleMultiChange(e, setMRole)}
                input={
                    <Input
                        label="Role"
                        startAdornment={
                            <InputAdornment position="start">
                                <FaIcons.FaUserTie />
                            </InputAdornment>
                        }
                    />
                }
                renderValue={(selected) => selected.join(', ')}
                // MenuProps={MenuProps}
            >
                {defaultRoles.map((name) => (
                    <MenuItem key={name} value={name}>
                        <Checkbox
                            checked={mRole.indexOf(name) > -1}
                        />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </Grid>
</Grid>
<Grid container spacing={6}>
    <Grid item lg={4} md={4} sm={4} xs={12}>

    <FormControl fullWidth>
            <InputLabel htmlFor="input-with-icon-adornment">Class Leader</InputLabel>
            <Select
                labelId="relation"
                size="small"
              
                name="classLeader"
                onChange={formik.handleChange}
                value={formik.values?.classLeader || ''}
                error={
                    formik.touched.classLeader &&
                    Boolean(formik.errors.classLeader)
                }
                helpertext={
                    formik.touched.classLeader &&
                    formik.errors.classLeader
                }
                input={
                    <Input
                        label="Gender"
                        startAdornment={
                            <InputAdornment position="start">
                                <FaIcons.FaUserTie />
                            </InputAdornment>
                        }
                    />
                }
               
            >
                <MenuItem disabled value="">
                    Select class leader
                </MenuItem>
                <MenuItem value="Yaw Boateng">
                Yaw Boateng
                </MenuItem>
                <MenuItem value="6192220b404220391b9fc921">
                    Not assinged
                </MenuItem>
            </Select>
        </FormControl>

     
    </Grid>
    <Grid item lg={4} md={4} sm={4} xs={12}>
    <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="input-with-icon-adornment">
            Organisation
            </InputLabel>
            <Select
                fullWidth
                labelId="OrganisationId"
                size="small"
                id="OrganisationId"
                multiple
                value={orgs}
                name="organisation"
                error={
                    formik.touched.organisation &&
                    Boolean(formik.errors.organisation)
                }
                helpertext={
                    formik.touched.organisation &&
                    formik.errors.organisation
                }
                onChange={(e) => handleMultiChange(e, setOrgs)}
                input={
                    <Input
                    label="Organisation"
                        startAdornment={
                            <InputAdornment position="start">
                                <FaIcons.FaUserTie />
                            </InputAdornment>
                        }
                    />
                }
                renderValue={(selected) => selected.join(', ')}
                // MenuProps={MenuProps}
            >
                {defaultOrgs.map((name) => (
                    <MenuItem key={name} value={name}>
                        <Checkbox
                            checked={orgs.indexOf(name) > -1}
                        />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        {/* <FormControl fullWidth>
            <InputLabel id="OrganisationId">
                <FaIcons.FaUsers /> Organisation
            </InputLabel>
            <Select
                fullWidth
                labelId="OrganisationId"
                id=""
                size="small"
                multiple
                label="Organisation"
                name="organisation"
                onChange={(e) => handleMultiChange(e, setOrgs)}
                value={orgs}
                error={
                    formik.touched.organisation &&
                    Boolean(formik.errors.organisation)
                }
                helpertext={
                    formik.touched.organisation &&
                    formik.errors.organisation
                }
            >
                <MenuItem value="Youth">Youth</MenuItem>
                <MenuItem value="Brigade">Brigade</MenuItem>
                <MenuItem value="Guild">Guild</MenuItem>
                <MenuItem value="NA">No organisation</MenuItem>
            </Select>
        </FormControl> */}
    </Grid>

    <Grid item lg={4} md={4} sm={4} xs={12}>
        <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
                Emergency Contact
            </InputLabel>
            <Input
                id="emergencyContact"
                startAdornment={
                    <InputAdornment position="start">
                        <FaIcons.FaMobile />
                    </InputAdornment>
                }
                name="emergencyContact"
                size="small"
                onChange={formik.handleChange}
                value={formik.values?.emergencyContact || ''}
                error={
                    formik.touched.emergencyContact &&
                    Boolean(formik.errors.emergencyContact)
                }
                helpertext={
                    formik.touched.emergencyContact &&
                    formik.errors.emergencyContact
                }
            />
        </FormControl>
    </Grid>
</Grid>
<Grid container spacing={6}>
    <Grid item lg={4} md={4} sm={4} xs={12}>
    <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="input-with-icon-adornment">
            Contact Name
            </InputLabel>
            <Input
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                        <FaIcons.FaUser />
                    </InputAdornment>
                }
                name="emergencyName"
                onChange={formik.handleChange}
                value={formik.values?.emergencyName || ''}
            error={
                formik.touched.emergencyName &&
                Boolean(formik.errors.emergencyName)
            }
            helpertext={
                formik.touched.emergencyName &&
                formik.errors.emergencyName
            }
                size="small"
            />
        </FormControl>
       
    </Grid>
    <Grid item lg={4} md={4} sm={4} xs={12}>
        <FormControl fullWidth>
            <InputLabel htmlFor="input-with-icon-adornment">
                Relation
            </InputLabel>
            <Select
                labelId="relation"
                size="small"
                label="RelationId"
                name="relation"
                onChange={formik.handleChange}
                value={formik.values?.relation || ''}
                error={
                    formik.touched.relationId &&
                    Boolean(formik.errors.relationId)
                }
                helpertext={
                    formik.touched.relationId &&
                    formik.errors.relationId
                }
                input={
                    <Input
                        label="Gender"
                        startAdornment={
                            <InputAdornment position="start">
                                <FaIcons.FaUsers />
                            </InputAdornment>
                        }
                    />
                }
               
            >
                <MenuItem disabled value="">
                    Select relation
                </MenuItem>
                <MenuItem value="Child">Child</MenuItem>
                <MenuItem value="Spouse">Spouse</MenuItem>
                <MenuItem value="Relative">Relative</MenuItem>
                <MenuItem value="Guardian">Guardian</MenuItem>
            </Select>
        </FormControl>
    </Grid>
</Grid>

<div style={{ marginTop: 30 }}>
    <Grid container spacing={6}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <span>Inactive</span>
            {active ? (
                <Switch
                    checked
                    onChange={() => setActive(!active)}
                    color="secondary"
                />
            ) : (
                <Switch
                    onChange={() => setActive(!active)}
                    color="secondary"
                />
            )}

            <span>Active</span>
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Button
                color="primary"
                variant="contained"
                type="submit"
                style={{ float: 'right' }}
            >
                <Icon>save</Icon>
                <span className="pl-2 capitalize">
                    {' '}
                    {!isUpdate ? 'Submit' : 'Update'}{' '}
                </span>
            </Button>
            <Button
                onClick={() => dispatch(toggleForm())}
                color="inherit"
                variant="contained"
                type="button"
                style={{ float: 'right', marginRight: 20 }}
            >
                <Icon>cancel</Icon>
                <span className="pl-2 capitalize">Cancel</span>
            </Button>
        </Grid>
    </Grid>
</div>
</form>
            {/* <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={4}>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <TextField
                            className="mb-4 w-full"
                            label="First Name"
                            type="text"
                            name="firstName"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FaIcons.FaUser />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={formik.handleChange}
                            value={formik.values?.firstName || ''}
                            error={
                                formik.touched.firstName &&
                                Boolean(formik.errors.firstName)
                            }
                            helpertext={
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
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FaIcons.FaUser />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={formik.handleChange}
                            value={formik.values.lastName || ''}
                            error={
                                formik.touched.lastName &&
                                Boolean(formik.errors.lastName)
                            }
                            helpertext={
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
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FaIcons.FaUser />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={formik.handleChange}
                            value={formik.values.others || ''}
                            error={
                                formik.touched.others &&
                                Boolean(formik.errors.others)
                            }
                            helpertext={
                                formik.touched.others && formik.errors.others
                            }
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={6}>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                <FaIcons.FaTransgender /> Gender
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                size="small"
                                label="Gender"
                                name="gender"
                                onChange={formik.handleChange}
                                value={formik.values?.gender || ''}
                                error={
                                    formik.touched.gender &&
                                    Boolean(formik.errors.gender)
                                }
                                helpertext={
                                    formik.touched.gender &&
                                    formik.errors.gender
                                }
                            >
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                className="mb-4 w-full"
                                margin="none"
                                id="mui-pickers-date"
                                label="Birth Date"
                                inputVariant="standard"
                                type="text"
                                autoOk={true}
                                value={date}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                <FaIcons.FaCircle /> Marrital Status
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                size="small"
                                label="Marrital Status"
                                name="marritalStatus"
                                onChange={formik.handleChange}
                                value={formik.values?.marritalStatus || ''}
                                error={
                                    formik.touched.marritalStatus &&
                                    Boolean(formik.errors.marritalStatus)
                                }
                                helpertext={
                                    formik.touched.marritalStatus &&
                                    formik.errors.marritalStatus
                                }
                            >
                                <MenuItem value="Single">Single</MenuItem>
                                <MenuItem value="Married">Married</MenuItem>
                                <MenuItem value="Divorce">Divorce</MenuItem>
                                <MenuItem value="Widow">Widow</MenuItem>
                                <MenuItem value="Widower">Widower</MenuItem>
                            </Select>
                        </FormControl>
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
                            value={formik.values?.location || ''}
                            error={
                                formik.touched.location &&
                                Boolean(formik.errors.location)
                            }
                            helpertext={
                                formik.touched.location &&
                                formik.errors.location
                            }
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FaIcons.FaLocationArrow />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <TextField
                            size="small"
                            className="mb-4 w-full"
                            label="Mobile Number"
                            type="text"
                            name="mobileNumber"
                            onChange={formik.handleChange}
                            value={formik.values?.mobileNumber || ''}
                            error={
                                formik.touched.mobileNumber &&
                                Boolean(formik.errors.mobileNumber)
                            }
                            helpertext={
                                formik.touched.mobileNumber && formik.errors.mobileNumber
                            }
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FaIcons.FaMobile />
                                    </InputAdornment>
                                ),
                            }}
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
                            value={formik.values?.occupation || ''}
                            error={
                                formik.touched.occupation &&
                                Boolean(formik.errors.occupation)
                            }
                            helpertext={
                                formik.touched.occupation &&
                                formik.errors.occupation
                            }
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MdIcons.MdWork />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={6}>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <TextField
                            size="small"
                            className="mb-4 w-full"
                            label="Year of Joining"
                            type="text"
                            name="yearOfJoining"
                            onChange={formik.handleChange}
                            value={formik.values?.yearOfJoining || ''}
                            error={
                                formik.touched.yearOfJoining &&
                                Boolean(formik.errors.yearOfJoining)
                            }
                            helpertext={
                                formik.touched.yearOfJoining &&
                                formik.errors.yearOfJoining
                            }
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FaIcons.FaCalendar />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="msId">
                                <FaIcons.FaCircle /> Membership Status
                            </InputLabel>
                            <Select
                                fullWidth
                                labelId="msId"
                                id="msId"
                                size="small"
                                label="Membership Status"
                                name="membershipStatus"
                                onChange={formik.handleChange}
                                value={formik.values?.membershipStatus || ''}
                                error={
                                    formik.touched.membershipStatus &&
                                    Boolean(formik.errors.membershipStatus)
                                }
                                helpertext={
                                    formik.touched.membershipStatus &&
                                    formik.errors.membershipStatus
                                }
                            >
                                <MenuItem value="Full Member">
                                    Full Member
                                </MenuItem>
                                <MenuItem value="Adherent">Adherent</MenuItem>
                                <MenuItem value="Catchumen">Catchumen</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="roleId">
                                <FaIcons.FaUserTie /> Role
                            </InputLabel>
                            <Select
                                fullWidth
                                labelId="roleId"
                                id="roleId"
                                size="small"
                                label="Role"
                                multiple
                                name="role"
                                onChange={(e) =>handleMultiChange(e,setMRole)}
                                value={mRole}
                                error={
                                    formik.touched.role &&
                                    Boolean(formik.errors.role)
                                }
                                helpertext={
                                    formik.touched.role &&
                                    formik.errors.role
                                }
                            >
                                <MenuItem value="Leader">Leader</MenuItem>
                                <MenuItem value="Class Leader">
                                    Class Leader
                                </MenuItem>
                                <MenuItem value=" Children Service Tutor">
                                    Children Service Tutor
                                </MenuItem>
                                <MenuItem value="Steward">Steward</MenuItem>
                                <MenuItem value="Usher">Usher</MenuItem>
                                <MenuItem value="Usher">Liturgist</MenuItem>
                                <MenuItem value="Care Taker">
                                    Care Taker
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={6}>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                    <FormControl fullWidth>
                            <InputLabel id=""> <FaIcons.FaUserTie /> Class Leader</InputLabel>
                            <Select
                                fullWidth
                                labelId="classLeaderId"
                                id="classLeaderId"
                                size="small"
                                label="Class Leader"
                                name="classLeader"
                                onChange={formik.handleChange}
                                value={formik.values?.classLeader||''}
                                error={
                                    formik.touched.classLeader &&
                                    Boolean(formik.errors.classLeader)
                                }
                                helpertext={
                                    formik.touched.classLeader &&
                                    formik.errors.classLeader
                                }
                            >
                                <MenuItem value="6192220b404220391b9fc921">Not assinged</MenuItem>
                               
                            </Select>
                        </FormControl>
                       
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                    <FormControl fullWidth>
                            <InputLabel id="OrganisationId">
                            <FaIcons.FaUsers /> Organisation
                            </InputLabel>
                            <Select
                                fullWidth
                                labelId="OrganisationId"
                                id=""
                                size="small"
                                multiple
                                label="Organisation"
                                name="organisation"
                                onChange={(e) =>handleMultiChange(e,setOrgs)}
                                value={orgs}
                                error={
                                    formik.touched.organisation &&
                                    Boolean(formik.errors.organisation)
                                }
                                helpertext={
                                    formik.touched.organisation &&
                                    formik.errors.organisation
                                }
                            >
                              
                                <MenuItem value="Youth">Youth</MenuItem>
                                <MenuItem value="Brigade">Brigade</MenuItem>
                                <MenuItem value="Guild">Guild</MenuItem>
                                <MenuItem value="NA">No organisation</MenuItem>
                            </Select>
                        </FormControl>

                       
                    </Grid>

                   

                    <Grid item lg={4} md={4} sm={4} xs={12}>
                    <TextField
                            className="mb-4 w-full"
                            label="Emergency Contact"
                            type="text"
                            name="emergencyContact"
                            size="small"
                            onChange={formik.handleChange}
                            value={formik.values?.emergencyContact||''}
                            error={
                                formik.touched.emergencyContact &&
                                Boolean(formik.errors.emergencyContact)
                            }
                            helpertext={
                                formik.touched.emergencyContact &&
                                formik.errors.emergencyContact
                            }
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FaIcons.FaMobile />
                                    </InputAdornment>
                                ),
                            }}
                        />
                       
                    </Grid>
                </Grid>
                <Grid container spacing={6}>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                    <TextField
                            className="mb-4 w-full"
                            label="Contact Name"
                            type="text"
                            name="emergencyName"
                            size="small"
                            onChange={formik.handleChange}
                            value={formik.values?.emergencyName ||''}
                            error={
                                formik.touched.emergencyName &&
                                Boolean(formik.errors.emergencyName)
                            }
                            helpertext={
                                formik.touched.emergencyName &&
                                formik.errors.emergencyName
                            }
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FaIcons.FaUser />
                                    </InputAdornment>
                                ),
                            }}
                        />
                       
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                    <FormControl fullWidth>
                            <InputLabel id="relationId">
                            <FaIcons.FaUsers />  Relation
                            </InputLabel>
                            <Select
                                fullWidth
                                labelId="relationId"
                                id=""
                                size="small"
                              
                                label="RelationId"
                                name="relation"
                                onChange={formik.handleChange}
                                value={formik.values?.relation||''}
                                error={
                                    formik.touched.relationId &&
                                    Boolean(formik.errors.relationId)
                                }
                                helpertext={
                                    formik.touched.relationId &&
                                    formik.errors.relationId
                                }
                            >
                                <MenuItem value="Child">Child</MenuItem>
                                <MenuItem value="Spouse">Spouse</MenuItem>
                                <MenuItem value="Relative">Relative</MenuItem>
                                <MenuItem value="Guardian">Guardian</MenuItem>
                            </Select>
                        </FormControl>

                       
                    </Grid>
                   
                </Grid>

                

                <div style={{ marginTop: 30 }}>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                <span>Inactive</span>
                                {
                                    active?  <Switch checked  onChange={()=>setActive(!active)} color="secondary" /> :
                                    <Switch   onChange={()=>setActive(!active)} color="secondary" />
                                }
                               
                                <span>Active</span>
                           
                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Button
                                color="primary"
                                variant="contained"
                                type="submit"
                                style={{ float: 'right' }}
                              
                            >
                                <Icon>save</Icon>
                                <span className="pl-2 capitalize">  {!isUpdate? 'Submit': 'Update'} </span>
                            </Button>
                            <Button
                                onClick={() => dispatch(toggleForm())}
                                color="inherit"
                                variant="contained"
                                type="button"
                                style={{ float: 'right', marginRight: 20 }}
                            >
                                <Icon>cancel</Icon>
                                <span className="pl-2 capitalize">Cancel</span>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
           
            </form> */}
        </div>
    )
}

export default AddMemberForm
