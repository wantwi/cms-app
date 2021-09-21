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

function CustomTableComponent({ data }) {
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

    const commands = ({ name }) => {
        console.log(name)

        return (
            <>
                <IconButton
                    id={name.replace(' ', '')}
                    onClick={() => editEventListener(name)}
                >
                    <Icon color="info">edit</Icon>
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

    const ImageTemplate = ({ image }) => {
        return (
            <div className="p-0 m-0">
                <img
                    style={{
                        width: '45px',
                        height: '45px',
                        padding: 0,
                        margin: '0 auto',
                    }}
                    src={image}
                    alt="image"
                />
            </div>
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
                    headerText="Member Image"
                    template={ImageTemplate}
                    field="image"
                    width="70"
                    textAlign="Center"
                />
                <ColumnDirective headerText="Name" field="name" width="100" />
                <ColumnDirective
                    headerText="Class Leader"
                    field="classLeader"
                    width="100"
                />
                <ColumnDirective
                    headerText="Phone Number"
                    field="phoneNumber"
                    width="100"
                    format="C2"
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

export default CustomTableComponent
