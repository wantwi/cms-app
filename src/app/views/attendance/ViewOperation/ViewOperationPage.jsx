import React, { useState, useEffect, useRef } from 'react'
import { Breadcrumb } from 'app/components'
import { Grid, Card } from '@material-ui/core'
import AddOperationTable from 'app/components/tables/AddOperationTable'
import OperationTable from 'app/components/tables/operationTable'
import FormModal from 'app/components/CustomizedDialog/FormModal'
import { useDispatch, useSelector } from 'react-redux'
import {
    getActiveOperationTypes,
    getOperations,
    addOperation,
} from 'app/redux/operations/operationsActions'

function ViewOperationPage() {
    const [isOpen, setisOpen] = useState(false)
    // const [year, setYear] = useState("")
    //const [month, setMonth] = useState("")

    const { operationTypes, operations } = useSelector(
        (state) => state.churchOperation
    )

    const dispatch = useDispatch()
    const selectionGrid = useRef(null)
    const month = useRef('')
    const year = useRef('')

    const handleChange = (e) => {
        if (
            year.current.value != 'Select Year' &&
            month.current.value != 'Select Month'
        ) {
            dispatch(getOperations(month.current.value, year.current.value))
        }
    }

    const toggleModal = () => {
        setisOpen(!isOpen)
    }

    const saveActionHandler = () => {
        let values = selectionGrid.current.dataSource.map((y) => {
            const { week1, week2, week3, week4, week5 } = y
            return {
                operationId: operationTypes.find((x) => x.name === y.name).id,
                week1: +week1,
                week2: +week2,
                week3: +week3,
                week4: +week4,
                week5: +week5,
                month: month.current.value,
                year: year.current.value,
            }
        })
        console.log({ values })
        dispatch(addOperation(values))

        setisOpen(false)
        dispatch(getOperations(month.current.value, year.current.value))
    }

    useEffect(() => {
        dispatch(getActiveOperationTypes())

        return () => {
            setisOpen(!isOpen)
        }
    }, [])

    return (
        <div className=" m-sm-30 mt-6">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        {
                            name: 'Attendance',
                            path: '/attendance/organisation',
                        },
                        { name: 'Organisation' },
                    ]}
                />
            </div>
            <Grid container spacing={3}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Card className="px-6 pt-2 pb-0 mb-2" raised>
                        <Grid className=" mb-2" container spacing={3}>
                            <Grid item lg={2} md={2} sm={6} xs={12}>
                                <select
                                    className="form-control"
                                    style={{ fontSize: 11 }}
                                    ref={month}
                                    name="month"
                                    onChange={handleChange}
                                >
                                    <option value="">Select Month</option>
                                    <option value="Jan">Jan</option>
                                    <option value="Feb">Feb</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                </select>
                            </Grid>
                            <Grid item lg={2} md={2} sm={6} xs={12}>
                                <select
                                    className="form-control"
                                    style={{ fontSize: 11 }}
                                    ref={year}
                                    name="year"
                                    onChange={handleChange}
                                >
                                    <option>Select Year</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                </select>
                            </Grid>
                        </Grid>

                        <OperationTable
                            month={month}
                            year={year}
                            data={operations}
                            toggleModal={toggleModal}
                        />
                    </Card>
                </Grid>
            </Grid>
            <FormModal
                open={isOpen}
                title={`Add Attendance`}
                toggleModal={toggleModal}
                saveActionHandler={saveActionHandler}
            >
                <AddOperationTable
                    selectionGrid={selectionGrid}
                    operationTypes={operationTypes}
                />
            </FormModal>
        </div>
    )
}

export default ViewOperationPage
