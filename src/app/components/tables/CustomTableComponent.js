import React, { useRef } from 'react'

import {
    ColumnDirective,
    ColumnsDirective,
    GridComponent,
    Page,
    Inject,
    Toolbar,
    ExcelExport,
    PdfExport,
    Group,
} from '@syncfusion/ej2-react-grids'
import { Icon, Button, IconButton, Fab } from '@material-ui/core'

import {
    getMemberById,
    toggleForm,
} from '../../redux/adultService/AdultServiceActions'
import { useDispatch, useSelector } from 'react-redux'

function CustomTableComponent({ data }) {
    const dispatch = useDispatch()
    const grid = useRef(null)

    const { memberInfo } = useSelector((state) => state.adultService)

    console.log({ memberInfo })

    const toolbarClick = (args) => {
        console.log({ grid })
        if (grid && args.item.id.includes('excelexport')) {
            grid.current.columns[0].visible = false
            grid.current.columns[4].visible = false
            grid.current.excelExport()
        }
        if (grid && args.item.id.includes('pdfexport')) {
            grid.current.pdfExport()
        }
    }

    const commands = ({ _id }) => {
        return (
            <>
                <IconButton id={_id} onClick={() => editEventListener(_id)}>
                    <Icon>edit</Icon>
                </IconButton>
                <IconButton>
                    <Icon color="error">delete</Icon>
                </IconButton>
                {/* <IconButton aria-label="Delete" size="small" color="danger">
                    <Icon>delete</Icon>
                </IconButton> */}
            </>
        )
    }

    const statusTemplate = ({ status }) => {
        return status === 1 ? (
            <Button variant="contained"  style={{background:"#0cc143", margin:0, padding:"5px 10px",width:100, color:"#fff"}}>
                Active
            </Button>
        ) : (
            <Button variant="contained" color="error">Inactive</Button>
        )
    }

    const editEventListener = (id) => {
        
        dispatch(getMemberById(id))
        // dispatch(toggleForm())
    }

    const ImageTemplate = ({ image }) => {
        return (
            <div className="p-0 m-0">
                <img
                    style={{
                        width: '45px',
                        height: '45px',
                        padding: 0,
                        margin: '0 auto',
                    }}
                    src={image}
                    alt="image"
                />
            </div>
        )
    }

    return (
        <GridComponent
            dataSource={data}
            allowPaging={true}
            height={365}
            pageSettings={{ pageCount: 5, pageSizes: true }}
            allowExcelExport={true}
            allowPdfExport={true}
            toolbar={['ExcelExport', 'PdfExport']}
            toolbarClick={toolbarClick}
            ref={grid}
        >
            <ColumnsDirective>
                {/* <ColumnDirective
                    headerText="Member Image"
                    template={ImageTemplate}
                    field="image"
                    width="70"
                    textAlign="Center"
                /> */}
                <ColumnDirective headerText="ID" field="_id" width="120" />
                <ColumnDirective
                    headerText="Name"
                    field="firstName"
                    width="100"
                />
                <ColumnDirective headerText="Role" field="role" width="100" />
                <ColumnDirective
                    headerText="Class Leader"
                    field="lastName"
                    width="100"
                />
                <ColumnDirective
                    headerText="Phone Number"
                    field="mobileNumber"
                    width="100"
                    format="C2"
                />
                <ColumnDirective
                    headerText="Status"
                    field="status"
                    width="100"
                    template={statusTemplate}
                />
                <ColumnDirective
                    headerText="Action"
                    width="100"
                    template={commands}
                    field="_id"
                />
            </ColumnsDirective>
            <Inject services={[Page, Toolbar, ExcelExport, PdfExport, Group]} />
        </GridComponent>
    )
}

export default CustomTableComponent
