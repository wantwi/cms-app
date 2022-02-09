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
import Image from '../../views/members/001-man.svg'
import {useDispatch,useSelector} from "react-redux"
import {getCommittees,getMemberInfo,addCommitteeMembers,toggleForm} from "../../redux/adultService/AdultServiceActions"




function DisplayMemberTable({ data,toggleModal,open }) {
    const dispatch = useDispatch()
    const grid = useRef(null)

    const removeExtraSpaces = (string) => {
        return string.replace(/\s+/g,' ').trim();
     }
    
     const ImageTemplate = () => {
        return (
            <div className="p-0 m-0">
                <img
                    style={{
                        width: '45px',
                        height: '45px',
                        padding: 0,
                        margin: '0 auto',
                    }}
                    src={Image}
                    alt="image"
                />
            </div>
        )
    }
    
    const NameTemplate = ({firstName,lastName,others}) => {
    
        return others? removeExtraSpaces(`${firstName} ${others} ${lastName}`) :  removeExtraSpaces(`${firstName} ${lastName}`)
    
         
    }
    const statusTemplate = ({ status }) => {
        return status === 1 ? (
            <span variant="contained"  style={{background:"#4afb00a1", margin:0, padding:"5px 15px",width:120,borderRadius: 10, color:"#fff"}}>
                Active
            </span>
        ) : (
            <span variant="contained" style={{background:"#fb00008c",borderRadius: 10, margin:0, padding:"5px 10px",width:100, color:"#fff"}} >Inactive</span>
        )
    }


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

    const commands = ({ className }) => {
        return (
            <>
              
                <IconButton>
                    <Icon color="error">delete</Icon>
                </IconButton>
               
            </>
        )
    }

    const actionBegin =(args)=>{
        if(args && args?.requestType ==="add"){
            args.cancel=true

            toggleModal(!open)
        }
    }

    const actionComplete =(args)=>{
        if(args && args?.requestType ==="add"){
           
           
        }

    }

    return (
        <GridComponent
            dataSource={data}
            allowPaging={true}
            height={365}
            pageSettings={{ pageCount: 5, pageSizes: true }}
            allowExcelExport={true}
            allowPdfExport={true}
            toolbar={['Add','ExcelExport', 'PdfExport']}
            editSettings={{
                allowEditing: true,
                allowAdding: true,
                allowDeleting: true,
                newRowPosition: 'Top',
            }}
            toolbarClick={toolbarClick}
            ref={grid}
           actionBegin={actionBegin}
            actionComplete={actionComplete}
           // actionFailure={actionFailure}
        >
              <ColumnsDirective>
                <ColumnDirective
                    headerText="Member Image"
                    template={ImageTemplate}
                    field="image"
                    width="70"
                    textAlign="Center"
                />
                <ColumnDirective visible={false} headerText="ID" field="id" width="120" />
                <ColumnDirective
                    headerText="Name"
                    field="firstName"
                    width="100"
                    template={NameTemplate}
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
                    field="id"
                />
            </ColumnsDirective>
            <Inject services={[Page, Toolbar, ExcelExport, PdfExport, Group]} />
        </GridComponent>
    )
}



export default DisplayMemberTable
