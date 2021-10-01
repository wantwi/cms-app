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

import { DataManager, Query } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

const status =[{ status: '1', name: 'Active' },{ value: '0', text: 'Inactive' }, ]




export const AttendanceTable = ({data, columnName })=> {

   
  
  
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
              { status: 'WEEK 1', value: 1},
              { status: 'WEEK 2', value: 2 },
              { status: 'WEEK 3', value: 3 },
              { status: 'WEEK 4', value: 4 },
              { status: 'WEEK 5', value: 5 },
             
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
              allowGrouping={true}
              height={365}
              pageSettings={{ pageCount: 5, pageSizes: true }}
              editSettings ={ { allowEditing: true, allowAdding: true, allowDeleting: true, }}
              toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
             
             
          >
              <ColumnsDirective>
                  <ColumnDirective
                      headerText={columnName}
                      field="name"
                      width="150"
                      editType='dropdownedit'
                      edit={typeName}
                  />
                  <ColumnDirective
                      headerText="Week"
                      field="Week"
                      width="100"
                      editType='dropdownedit'
                      edit={statusParams}
                  />
                   <ColumnDirective
                      headerText="Count"
                      field="number"
                      width="100"
                      editType='number'
                     
                  />
  
              
              </ColumnsDirective>
              <Inject services={[Page, Toolbar,  Toolbar, Edit, Group]} />
          </GridComponent>
      )
  }






export default AttendanceTable
