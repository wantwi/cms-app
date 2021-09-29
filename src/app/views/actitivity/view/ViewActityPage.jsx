import * as ReactDOM from 'react-dom'
import React, { useRef } from 'react'
import {
    ScheduleComponent,
    ViewsDirective,
    ViewDirective,
    View,
    Day,
    Week,
    WorkWeek,
    Month,
    EventRenderedArgs,
    Inject,
    Resize,
    DragAndDrop,
    ExcelExport,
    ExportOptions,
} from '@syncfusion/ej2-react-schedule'

import { Grid, Card } from '@material-ui/core'

import './schedule-component.css'
import { Breadcrumb } from 'app/components'

const recurrenceData = [
    {
        Id: 1,
        Subject: 'Project demo meeting with Andrew',
        Location: 'Office',
        StartTime: '2018-02-14T06:30:00.000Z',
        EndTime: '2018-02-14T07:30:00.000Z',
        RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;COUNT=10',
        CategoryColor: '#1aaa55',
    },
    {
        Id: 2,
        Subject: 'Scrum Meeting',
        Location: 'Office',
        StartTime: '2018-02-12T04:00:00.000Z',
        EndTime: '2018-02-12T05:00:00.000Z',
        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;INTERVAL=1',
        CategoryColor: '#7fa900',
    },
    {
        Id: 3,
        Subject: 'Meeting with Core team',
        Location: 'Office',
        StartTime: '2018-02-16T06:30:00.000Z',
        EndTime: '2018-02-16T08:30:00.000Z',
        RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1;BYDAY=FR',
        CategoryColor: '#f57f17',
    },
    {
        Id: 4,
        Subject: 'Customer meeting – John Mackenzie',
        Location: 'Office',
        StartTime: '2018-02-20T06:00:00.000Z',
        EndTime: '2018-02-20T08:00:00.000Z',
        RecurrenceRule: 'FREQ=MONTHLY;BYMONTHDAY=20;INTERVAL=1;COUNT=5',
        CategoryColor: '#1aaa55',
    },
    {
        Id: 5,
        Subject: 'Team Fun Activities',
        Location: 'Office',
        StartTime: '2018-02-21T18:30:00.000Z',
        EndTime: '2018-02-22T18:30:00.000Z',
        IsAllDay: true,
        RecurrenceRule:
            'FREQ=YEARLY;BYDAY=TH;BYMONTH=2;BYSETPOS=4;INTERVAL=1;COUNT=10',
        CategoryColor: '#00bdae',
    },
]

function ViewActityPage() {
    let scheduleObj = useRef(ScheduleComponent)

    const applyCategoryColor = (args, currentView) => {
        var categoryColor = args.data.CategoryColor
        if (!args.element || !categoryColor) {
            return
        }
        if (currentView === 'Agenda') {
            args.element.firstChild.style.borderLeftColor = categoryColor
        } else {
            args.element.style.backgroundColor = categoryColor
        }
    }

    console.log({ scheduleObj })
    const viewOptions = [
        { text: 'Day', value: 'Day' },
        { text: 'Week', value: 'Week' },
        { text: 'WorkWeek', value: 'WorkWeek' },
        { text: 'Month', value: 'Month' },
    ]

    const contextMenuItems = [
        { text: 'New Activity', iconCss: 'e-icons new', id: 'Add' },
        { text: 'Edit Event', iconCss: 'e-icons edit', id: 'Save' },
        { text: 'Delete Event', iconCss: 'e-icons delete', id: 'Delete' },
    ]

    const onActionBegin = (args) => {
        if (args.requestType === 'toolbarItemRendering') {
            let exportItem = {
                align: 'Right',
                showTextOn: 'Both',
                prefixIcon: 'e-icon-schedule-excel-export',
                text: 'Excel Export',
                cssClass: 'e-excel-export',
                click: onExportClick,
            }
            // args.items.push(exportItem);
        }

        //console.log({args});
    }
    const onExportClick = () => {
        let exportValues = {
            fields: ['Id', 'Subject', 'StartTime', 'EndTime', 'Location'],
        }
        scheduleObj.exportToExcel(exportValues)
    }

    const onActionComplete = (args) => {
        console.log('onActionComplete: ', { args })
    }

    const onEventRendered = (args) => {
        applyCategoryColor(args, scheduleObj.currentView)
    }

    return (
        <div className=" m-sm-30 mt-6">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Activity', path: '/activity/add' },
                        { name: 'View Activity' },
                    ]}
                />
            </div>
            <Grid container spacing={3}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Card className="px-6 pt-2 pb-4 mb-3" raised>
                        <div className="schedule-control-section">
                            <div className="col-lg-12 control-section">
                                <div className="control-wrapper">
                                    <ScheduleComponent
                                        width="100%"
                                        height="650px"
                                        actionBegin={onActionBegin}
                                        actionComplete={onActionComplete}
                                        ref={(t) => (scheduleObj = t)}
                                        selectedDate={new Date(2018, 1, 15)}
                                        eventSettings={{
                                            dataSource: recurrenceData,
                                        }}
                                        eventRendered={onEventRendered}
                                        enableAdaptiveUI={true}
                                    >
                                        <ViewsDirective>
                                            <ViewDirective option="Day" />
                                            <ViewDirective option="Week" />
                                            <ViewDirective option="Month" />
                                        </ViewsDirective>
                                        <Inject
                                            services={[
                                                Day,
                                                Week,
                                                WorkWeek,
                                                Month,
                                                Resize,
                                                DragAndDrop,
                                                ExcelExport,
                                            ]}
                                        />
                                    </ScheduleComponent>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default ViewActityPage
