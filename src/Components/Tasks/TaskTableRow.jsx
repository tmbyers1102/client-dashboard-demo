import React, { useEffect } from 'react'
import {
    TableRow,
    TableCell,
    Text,
    Badge,
} from "@tremor/react";

const TaskTableRow = ({task}) => {
    
    var status_color = []
    {if (task.fields.Status == 'Todo') {
        status_color= 'rose'
    } else if (task.fields.Status == 'Done') {
        status_color= 'green'
    } else if (task.fields.Status == 'Stuck') {
        status_color= 'amber'
    } else {
        status_color= 'zinc'
    }}

    var project_color = []
    {if (task.fields.related_project_string == 'Standard Client Onboarding') {
        project_color= 'orange'
    } else if (task.fields.related_project_string == 'Product Noun Optimizations') {
        project_color= 'indigo'
    } else {
        project_color= 'slate'
    }}

    return (
        <>
            <TableRow>
                <TableCell>{task.fields.Name}</TableCell>
                    <TableCell>
                        { task.fields.related_project_string ? (
                            <button className={`bg-${project_color}-100 px-3 py-1 text-xs rounded-full border border-full border-${project_color}-300`}>
                                {task.fields.related_project_string}
                            </button>
                        ) : (
                            null
                        ) }
                    </TableCell>
                <TableCell>
                    <Text>{task.fields.date_completed}</Text>
                </TableCell>
                <TableCell>
                <Badge text={task.fields.Status} color={status_color} />
                </TableCell>
            </TableRow>
        </>
    )
}

export default TaskTableRow;

// contact DMV with cert of death to get the title transferred to dad