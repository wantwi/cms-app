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

import { DataManager, Query } from '@syncfusion/ej2-data';








function AddOperationTable({selectionGrid,operationTypes}) {

   
  
    const typeName = {
        params: {
          actionComplete: () => false,
          allowFiltering: true,
          dataSource: new DataManager(operationTypes),
          fields: { text: 'name', value: 'name' },
          query: new Query(),
          placeholder:"Select Operation"
        }
      };
  

   

    return (
        <GridComponent
            dataSource={[]}
            allowPaging={true}
            height={365}
            toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
            editSettings={{
                allowEditing: true,
                allowAdding: true,
                allowDeleting: true,
                newRowPosition: 'Top',
            }}
            pageSettings={{ pageCount: 5, pageSizes: true }}
            allowExcelExport={true}
            allowPdfExport={true}
         
            ref={selectionGrid}
        >
              <ColumnsDirective>
               
                <ColumnDirective visible={false} headerText="ID" field="id" width="120" />
                <ColumnDirective
                    headerText="Operation Type"
                    field="name"
                    width="100"
                    editType= 'dropdownedit' 
                    edit={typeName}
                />
              
                <ColumnDirective
                    headerText="Week 1"
                    field="week1"
                    width="50"
                   
                />
                 <ColumnDirective
                    headerText="Week 2"
                    field="week2"
                    width="50"
                   
                />
                 <ColumnDirective
                    headerText="Week 3"
                    field="week3"
                    width="50"
                   
                />
                 <ColumnDirective
                    headerText="Week 4"
                    field="week4"
                    width="50"
                   
                />
                 <ColumnDirective
                    headerText="Week 5"
                    field="week5"
                    width="50"
                   
                />
              
            </ColumnsDirective>
            <Inject services={[Page, Toolbar, ExcelExport, PdfExport, Selection]} />
        </GridComponent>
    )
}


export default AddOperationTable
