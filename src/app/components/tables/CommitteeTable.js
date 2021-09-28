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
import { Icon, Button, IconButton, Fab } from '@material-ui/core'
import { DataManager, Query } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

const status =[{ status: '1', name: 'Active' },{ value: '0', text: 'Inactive' }, ]


function CommitteeTable({ data }) {
    const grid = useRef(null)


    const statusParams = {
        params: {
          actionComplete: () => false,
          allowFiltering: true,
          dataSource: new DataManager([
            { status: 'Active', value: 1},
            { status: 'Inactive', value: 0 },
           
          ]),
          fields: { text: 'status', value: 'status' },
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
            editSettings ={ { allowEditing: true, allowAdding: true, allowDeleting: true, }}
            toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
           
            ref={grid}
        >
            <ColumnsDirective>
                <ColumnDirective
                    headerText="Committee Name"
                    field="committeeName"
                    width="150"
                />
                <ColumnDirective
                    headerText="Status"
                    field="satus"
                    width="100"
                    editType='dropdownedit'
                    edit={statusParams}
                />

            
            </ColumnsDirective>
            <Inject services={[Page, Toolbar,  Toolbar, Edit, Group]} />
        </GridComponent>
    )
}



export default CommitteeTable
