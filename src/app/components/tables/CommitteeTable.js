import React, { useRef,useEffect } from 'react'
import {
    ColumnDirective,
    ColumnsDirective,
    GridComponent,
    Page,
    Inject,
    Toolbar,
    Group,
    Edit,
    CommandColumn
} from '@syncfusion/ej2-react-grids'

import { DataManager } from '@syncfusion/ej2-data'
import {useDispatch,useSelector} from "react-redux"
import {addCommittee,getCommittees,selecedRow} from "../../redux/adultService/AdultServiceActions"
import { DropDownList } from '@syncfusion/ej2-dropdowns';


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

const statusTemplate = ({ status }) => {
    return status === 1 ? (
        <span variant="contained"  style={{background:"#4afb00a1", margin:0, padding:"5px 15px",width:120,borderRadius: 10, color:"#fff"}}>
            Active
        </span>
    ) : (
        <span variant="contained" style={{background:"#fb00008c",borderRadius: 10, margin:0, padding:"5px 10px",width:100, color:"#fff"}} >Inactive</span>
    )
}

const commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
{ type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
{ type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
{ type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];


function CommitteeTable({ data }) {


     const dispatch = useDispatch()

     const {committee} = useSelector(state =>state.adultService)
 
  

  

    const grid = useRef(null)


    const actionBegin = (args) => {
      
    }

    const actionComplete = (args) => {
       
       if(args?.action ==="add"){
       
        
        dispatch(addCommittee(args.data))

       }
       if(args.requestType === "save"){

        console.log({res:args.data});
       
        // dispatch(updateOperation({
        //     type:OperationActionTypes.UPDATE_OPERATION,
        //     payload:{data: args.data,month:month.current.value,year:year.current.value}
        // }))
    }
    
    if(args.requestType === "delete"){
        console.log({res:args.data});
        // dispatch(deleteOperation({
        //     type:OperationActionTypes.DELETE_OPERATION,
        //     payload:{data: args.data,month:month.current.value,year:year.current.value}
        // }))
    }

    }

    const actionFailure = (args) => {}

    const rowSelected =(args)=>{

        dispatch(selecedRow(args.data))
    }

   useEffect(() => {
    dispatch(getCommittees())
   }, [])

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
            toolbar={['Add']}
            actionBegin={actionBegin}
            actionComplete={actionComplete}
            actionFailure={actionFailure}
            ref={grid}
            rowSelected={rowSelected}
        >
            <ColumnsDirective>
                <ColumnDirective
                    headerText="Committee Name"
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
                <ColumnDirective headerText='Action' width='100' commands={commands}></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Page,CommandColumn, Toolbar, Edit, Group]} />
        </GridComponent>
    )
}


export default CommitteeTable
