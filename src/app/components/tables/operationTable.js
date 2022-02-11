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
    GridLine
} from '@syncfusion/ej2-react-grids'



export const OperationTable = ({data,toggleModal}) => {
  const grid = useRef(null)

 

  const actionComplete =(args)=>{
      //  console.log({args});
  }
  const actionBegin =(args)=>{
   if(args?.requestType ==="add"){
       args.cancel = true
       toggleModal()
   }
  }

const toolbarClick = (args) => {
       
        if (grid && args.item.id.includes('excelexport')) {
            // grid.current.columns[0].visible = false
            // grid.current.columns[4].visible = false
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
            allowGrouping={true}
            allowExcelExport={true}
            allowPdfExport={true}
            editSettings={{
                allowEditing: true,
                allowAdding: true,
                allowDeleting: true,
                newRowPosition: 'Top',
            }}
            height={365}
            toolbar={['Add', 'Edit', 'Delete', 'ExcelExport', 'PdfExport']}
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
                  
                />
            </ColumnsDirective>
            <Inject services={[Page, Toolbar, Toolbar, Edit, Group]} />
        </GridComponent>
    )
}

export default OperationTable
