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

function ClassTable({ data }) {
    const grid = useRef(null)

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
                <IconButton
                    id={className.replace(' ', '')}
                    onClick={() => editEventListener(className)}
                >
                    <Icon>edit</Icon>
                </IconButton>
                <IconButton>
                    <Icon color="error">delete</Icon>
                </IconButton>
                {/* <IconButton aria-label="Delete" size="small" color="danger">
                    <Icon>delete</Icon>
                </IconButton> */}
            </>
        )
    }

    const editEventListener = (id) => {
        alert(id)
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
                    headerText="Class Name"
                    field="className"
                    width="150"
                />
                <ColumnDirective
                    headerText="Class Leader"
                    field="classLeader"
                    width="150"
                />
                <ColumnDirective
                    headerText="Deputy"
                    field="deputyClassLeader"
                    width="150"
                />
                <ColumnDirective
                    headerText="Meeting Days"
                    field="meetingDays"
                    width="100"
                />
                <ColumnDirective
                    headerText="Status"
                    field="status"
                    width="100"
                />
                <ColumnDirective
                    headerText="Action"
                    width="100"
                    template={commands}
                    field="name"
                />
            </ColumnsDirective>
            <Inject services={[Page, Toolbar, ExcelExport, PdfExport, Group]} />
        </GridComponent>
    )
}

export default ClassTable
