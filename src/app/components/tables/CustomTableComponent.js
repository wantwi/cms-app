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
import { Icon, Button, IconButton, Fab } from '@mui/material'
import { withStyles } from '@mui/styles';

import {
    getMemberById,
    toggleForm,
    removeMember
} from '../../redux/adultService/AdultServiceActions'
import { useDispatch, useSelector } from 'react-redux'
import Image from '../../views/members/001-man.svg'

const removeExtraSpaces = (string) => {
    return string.replace(/\s+/g,' ').trim();
 }

function CustomTableComponent({ data }) {
    const dispatch = useDispatch()
    const grid = useRef(null)

    const { memberInfo } = useSelector((state) => state.adultService)

   
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

    const commands = ({ id }) => {
        return (
            <>
                <IconButton id={id} onClick={() => editEventListener(id)}>
                    <Icon>edit</Icon>
                </IconButton>
                <IconButton onClick={() => deleteEventListener(id)} >
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
            <span variant="contained"  style={{background:"#0cc143",borderRadius:'5px', margin:0, padding:"5px 10px",width:100, color:"#fff"}}>
                Active
            </span>
        ) : (
            <span variant="contained" >Inactive</span>
        )
    }

    const editEventListener = (id) => {
        
        dispatch(getMemberById(id))
        // dispatch(toggleForm())
    }

    const deleteEventListener =(id)=>{
        dispatch(removeMember(id))
    }

    const ImageTemplate = ({image}) => {
        return (
            <div className="p-0 m-0">
                <img
                    style={{
                        width: '45px',
                        height: '45px',
                        padding: 0,
                        margin: '0 auto',
                        borderRadius:'8px'
                    }}
                    src={ image? `http://localhost:8080/${image}`:Image}
                    alt="image"
                />
            </div>
        )
    }

    const NameTemplate = ({firstName,lastName,others}) => {

        return others? removeExtraSpaces(`${firstName} ${others} ${lastName}`) :  removeExtraSpaces(`${firstName} ${lastName}`)

         
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
                <ColumnDirective
                    headerText="Member Image"
                    template={ImageTemplate}
                    field="image"
                    width="50"
                    textAlign="left"
                />
                <ColumnDirective visible={false} headerText="ID" field="id" width="100" />
                <ColumnDirective
                    headerText="Name"
                    field="firstName"
                    width="100"
                    template={NameTemplate}
                />

                <ColumnDirective
                    headerText="Gender"
                    field="gender"
                    width="60"
                   
                />
               
                <ColumnDirective
                    headerText="Class Leader"
                    field="classLeader"
                    width="100"
                />
                <ColumnDirective
                    headerText="Phone Number"
                    field="phoneNumber"
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
