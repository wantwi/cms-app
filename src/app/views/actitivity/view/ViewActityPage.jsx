import * as ReactDOM from 'react-dom'
import * as React from 'react'
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
} from '@syncfusion/ej2-react-schedule'
import { applyCategoryColor } from './helper'
import './schedule-component.css'
import { extend } from '@syncfusion/ej2-base'

function ViewActityPage() {
    const viewOptions = [
        { text: 'Day', value: 'Day' },
        { text: 'Week', value: 'Week' },
        { text: 'WorkWeek', value: 'WorkWeek' },
        { text: 'Month', value: 'Month' },
    ]

    const fields = { text: 'text', value: 'value' }

    // const onViewChange = (args) => {
    //     scheduleObj.currentView = args.value
    //     scheduleObj.dataBind()
    // }
    // const onEventRendered = (args) => {
    //     applyCategoryColor(args, scheduleObj.currentView)
    // }

    // const applyCategoryColor = (args, currentView) => {
    //     var categoryColor = args.data.CategoryColor
    //     if (!args.element || !categoryColor) {
    //         return
    //     }
    //     if (currentView === 'Agenda') {
    //         args.element.firstChild.style.borderLeftColor = categoryColor
    //     } else {
    //         args.element.style.backgroundColor = categoryColor
    //     }
    // }

    return (
        <div className="schedule-control-section">
            <div className="col-lg-9 control-section">
                <div className="control-wrapper">
                    <ScheduleComponent
                        width="100%"
                        height="650px"
                        // ref={(schedule) => (scheduleObj = schedule)}
                        selectedDate={new Date(2018, 1, 15)}
                        eventSettings={{ dataSource: [] }}
                        //eventRendered={onEventRendered.bind(this)}
                    >
                        <ViewsDirective>
                            <ViewDirective option="Day" />
                            <ViewDirective option="Week" />
                            <ViewDirective option="WorkWeek" />
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
                            ]}
                        />
                    </ScheduleComponent>
                </div>
            </div>
        </div>
    )
}

export default ViewActityPage
