import React, { useRef } from 'react'
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
import {useDispatch} from 'react-redux'
import {deleteOperation,updateOperation, OperationActionTypes} from "../../redux/operations/operationsActions"




export const OperationTable = ({month,year,data,toggleModal}) => {
  const grid = useRef(null)
  const dispatch = useDispatch();

  const commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
  { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
  { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
  { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];

 

  const actionComplete =(args)=>{
   
        if(args.requestType === "save"){

            console.log(args.data);
           
            dispatch(updateOperation({
                type:OperationActionTypes.UPDATE_OPERATION,
                payload:{data: args.data,month:month.current.value,year:year.current.value}
            }))
        }
        
        if(args.requestType === "delete"){
            console.log(args.data);
            dispatch(deleteOperation({
                type:OperationActionTypes.DELETE_OPERATION,
                payload:{data: args.data,month:month.current.value,year:year.current.value}
            }))
        }
  }
  const actionBegin =(args)=>{
   if(args?.requestType ==="add"){
       args.cancel = true

       if(year.current.value !="Select Year" && month.current.value !="Select Month" ){
        toggleModal()
        }
      
   }
  }

const toolbarClick = (args) => {
       
        if (grid && args.item.id.includes('excelexport')) {
            grid.current.excelExport()
        }
        if (grid && args.item.id.includes('pdfexport')) {
            grid.current.pdfExport()
        }
    }


    return (
        <GridComponent
            dataSource={data}
            allowPaging={true}
            allowExcelExport={true}
            allowPdfExport={true}
            editSettings={{
                allowEditing: true,
                allowAdding: true,
                allowDeleting: true,
                newRowPosition: 'Top',
            }}
            height={365}
            toolbar={['Add','ExcelExport', 'PdfExport']}
            toolbarClick={toolbarClick}
            actionComplete={actionComplete}
            actionBegin={actionBegin}
           ref={grid}
            gridLines="Both"
        >
            <ColumnsDirective>
                <ColumnDirective
                    headerText="Operations"
                    field="name"
                    width="150"
                    isPrimaryKey={true}
                   
                    
                />
                <ColumnDirective
                    columns={[
                        {
                            field: 'week1',
                            headerText: 'Week 1',

                            width: 100,
                        },
                        {
                            field: 'week2',
                            headerText: 'Week 2',
                            width: 100,
                        },
                        {
                            field: 'week3',
                            headerText: 'Week 3',
                            width: 100,
                        },
                        {
                            field: 'week4',
                            headerText: 'Week 4',
                            width: 100,
                        },
                        {
                            field: 'week5',
                            headerText: 'Week 5',
                            width: 100,
                        },
                    ]}
                    headerText="Numbers"
                    textAlign="Center"
                ></ColumnDirective>
                <ColumnDirective
                    headerText="Total"
                    field="total"
                    width="100"
                    isPrimaryKey={true}
                  
                />
                <ColumnDirective headerText='Action' width='100' commands={commands}></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Page, CommandColumn, Toolbar, Edit, Group]} />
        </GridComponent>
    )
}

export default OperationTable
