import React, { useRef } from 'react'
import {
    ColumnDirective,
    ColumnsDirective,
    GridComponent,
    Page,
    Inject,
    Toolbar,
 
    Group,
    Edit
} from '@syncfusion/ej2-react-grids'
import { Icon, Button, IconButton, Fab } from '@mui/material'

import { DataManager, Query } from '@syncfusion/ej2-data';
import {useDispatch} from "react-redux"
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import {addOperationTypes,updateOperationTypes,deleteOperationTypes} from "../../redux/operations/operationsActions"

let dropdownObjr;
let elem;
const  dropdownTemp = {

    create: () => {
        //create function is used to create the element at time of initialization
         elem = document.createElement('input');
        return elem;
      },

      destroy: () => {
        //destroy function is used to destroy the component.
        dropdownObjr.destroy();
      },
      read: () => {
        //read function is used to read the value from component at time of save.
        return dropdownObjr.value;
      },
      write: args => {
      
            dropdownObjr = new DropDownList({
                //Custom DropDownList component
                dataSource: new DataManager([
                  { status: 'Active', value: 1 },
                  { status: 'inactive', value: 0 },
              ]),
                fields: {text:"status", value: 'value' },
                value: args.rowData[args.column.field],
                actionComplete: () => false,
                allowFiltering: true,
                popupHeight: '300px'
              });
              dropdownObjr.appendTo(elem);
          
        //	write function is used to create custom component or assign default value at time of editing.
       
      }


}





export const AttendanceTable = ({data, columnName })=> {
  const grid = useRef(null)
  const dispatch = useDispatch()
//   const commands = ({ id }) => {
//     return (
//         <>
//             <IconButton id={id} onClick={() => console.log(id)}>
//                 <Icon>edit</Icon>
//             </IconButton>
//             <IconButton onClick={() => console.log(id)} >
//                 <Icon color="error">delete</Icon>
//             </IconButton>
//             {/* <IconButton aria-label="Delete" size="small" color="danger">
//                 <Icon>delete</Icon>
//             </IconButton> */}
//         </>
//     )
// }

const actionBegin = (args) => {
      
}

const actionComplete = (args) => {
  console.log({args})
   
   if(args?.action ==="add"){
   
    
    dispatch(addOperationTypes(args.data))

   }
   if(args?.action ==="edit"){
   
    
    dispatch(updateOperationTypes(args.data))

   }
   if(args?.requestType === 'delete'){
    dispatch(deleteOperationTypes(args.data))
   }

}

const actionFailure = (args) => {}

const rowSelected =(args)=>{

    //dispatch(selecedRow(args.data))
}


const statusTemplate = ({ status }) => {
    return status === 1 ? (
        <span variant="contained"  style={{background:"#0cc143",borderRadius:'5px', margin:0, padding:"5px 10px",width:100, color:"#fff"}}>
            Active
        </span>
    ) : (
        <span variant="contained" style={{background:"#f62222c4",borderRadius:'5px', margin:0, padding:"5px 10px",width:100, color:"#fff"}} >Inactive</span>
    )
}
   
  
  
    const typeName = {
        params: {
          actionComplete: () => false,
          allowFiltering: true,
          dataSource: new DataManager([
            { status: 'Class Meeting Attendance', value: 1},
            { status: 'Church Service Attendance', value: 2 },
            { status: 'Adults Service Attendance', value: 3 },
            { status: 'Children Service Attendance', value: 4 },
            { status: 'Youth/Teen Service Attendance', value: 5 },
            { status: 'Communion Service Participants', value: 5 },
            { status: 'Members Received at Leader Meeting', value: 5 },
            { status: 'Visitors', value: 5 },
            { status: 'Prayer Meeting Attendance', value: 5 },
            { status: 'MPRP Attendance', value: 5 },
            { status: 'Revival Meeting Attendance', value: 5 },
            { status: 'Outreach Members Participationg', value: 5 },
            { status: 'Souls Won (New Members)', value: 5 },
            { status: 'Marriages', value: 5 },
            { status: 'Birth', value: 5 },
            { status: 'Baptisms', value: 5 },
            { status: 'Confirmation', value: 5 },
            { status: 'Organisational Membership', value: 5 },
            { status: 'Deaths', value: 5 },
           
           
          ]),
          fields: { text: 'status', value: 'status' },
          query: new Query(),
          placeholder:"Select status"
        }
      };
  
      const statusParams = {
          params: {
            actionComplete: () => false,
            allowFiltering: true,
            dataSource: new DataManager([
              { status: 'Active', value: 1},
              { status: 'Inactive', value: 0 }
             
            ]),
            fields: { text: 'status', value: 'value' },
            query: new Query(),
            placeholder:"Select status"
          }
        };
     
      return (
        <GridComponent
        dataSource={data}
        allowPaging={true}
        height={365}
        pageSettings={{ pageCount: 5, pageSizes: true }}
        editSettings={{
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
            newRowPosition: 'Top',
        }}
        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
        actionBegin={actionBegin}
        actionComplete={actionComplete}
        actionFailure={actionFailure}
        ref={grid}
        rowSelected={rowSelected}
    >
        <ColumnsDirective>
            <ColumnDirective
                headerText="Operation Type"
                field="name"
                width="150"
                validationRules={{ required: true }}
               
            />
            <ColumnDirective
                headerText="Status"
                field="status"
                width="100"
                editType="dropdownedit"
                edit={dropdownTemp}
                validationRules={{ required: true }}
                template ={statusTemplate}
            />
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Edit, Group]} />
    </GridComponent>
      )
  }






export default AttendanceTable
