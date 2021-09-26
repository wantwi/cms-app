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

function ClassesTable({ data }) {
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

    const commands = () => {
        return (
            <>
                <IconButton>
                    <Icon color="primary">people</Icon>
                </IconButton>
            </>
        )
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
                    headerText="Members"
                    field="members"
                    width="100"
                />

                <ColumnDirective
                    headerText="Action"
                    width="100"
                    template={commands}
                />
            </ColumnsDirective>
            <Inject services={[Page, Toolbar, ExcelExport, PdfExport, Group]} />
        </GridComponent>
    )
}

export default ClassesTable
