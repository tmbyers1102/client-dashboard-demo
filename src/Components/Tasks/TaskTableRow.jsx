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

    return (
        <>
            <TableRow>
                <TableCell>{task.fields.Name}</TableCell>
                    <TableCell>
                        <button className="bg-blue-50 px-3 py-1 text-xs rounded-full border border-full border-blue-600">
                            {task.fields.related_project_string}
                        </button>
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