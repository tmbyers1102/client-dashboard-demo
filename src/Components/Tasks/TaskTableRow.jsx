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
        project_color= 'bg-orange-100'
    } else if (task.fields.related_project_string == 'Product Noun Optimizations') {
        project_color= 'bg-indigo-100'
    } else {
        project_color= 'bg-slate-100'
    }}

    return (
        <>
            <TableRow>
                <TableCell>{task.fields.Name}</TableCell>
                    <TableCell>
                        { task.fields.related_project_string ? (
                            <button className={`${project_color} px-3 py-1 text-xs rounded-full border border-full border-blue-600`}>
                                {task.fields.related_project_string}
                            </button>
                        ) : (
                            null
                        )}
                    </TableCell>
                <TableCell>
                    <Text>{task.fields.date_completed}</Text>
                </TableCell>
                <TableCell>
                <Badge
                    text={task.fields.Status}
                    color={status_color}
                />
                </TableCell>
            </TableRow>
        </>
    )
}

export default TaskTableRow;