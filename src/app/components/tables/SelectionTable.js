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
    Selection,
} from '@syncfusion/ej2-react-grids'
import { Icon, Button, IconButton, Fab } from '@material-ui/core'
import Image from '../../views/members/001-man.svg'



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


function SelectionTable({ data,selectionGrid}) {
  
    const commands = ({ className }) => {
        return (
            <>
              
                <IconButton>
                    <Icon color="error">delete</Icon>
                </IconButton>
               
            </>
        )
    }

    // const actionBegin =(args)=>{
    //     if(args && args?.requestType ==="add"){
    //         args.cancel=true

    //         toggleModal(!open)
    //     }
    // }

    // const actionComplete =(args)=>{
    //     if(args && args?.requestType ==="add"){
           
           
    //     }

    // }

    return (
        <GridComponent
            dataSource={data}
            allowPaging={true}
            height={365}
            pageSettings={{ pageCount: 5, pageSizes: true }}
            allowExcelExport={true}
            allowPdfExport={true}
         
            ref={selectionGrid}
        //    actionBegin={actionBegin}
        //     actionComplete={actionComplete}
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
                    <ColumnDirective type='checkbox' width='50'></ColumnDirective>
                <ColumnDirective
                    headerText="Action"
                    width="100"
                    template={commands}
                    field="id"
                    visible={false}
                />
            </ColumnsDirective>
            <Inject services={[Page, Toolbar, ExcelExport, PdfExport, Selection]} />
        </GridComponent>
    )
}


export default SelectionTable
