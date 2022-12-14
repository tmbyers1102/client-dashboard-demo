import React, { useEffect, useState } from 'react'
import Airtable from 'airtable';
import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
  } from "@tremor/react";
import SpinnerComponent from '../Objects/Animations/SpinnerComponent';
import TaskTableRow from './TaskTableRow';

const base = new Airtable({ apiKey: 'keydxzcJdUXUCRGYy' }).base('appsc6BvDzAQRtjc2')

const TaskTable = () => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        if(tasks?.length > 0) {
            setLoading(false)
        }
    }, [tasks])

    useEffect(() => {
        base("tasks")
            .select({ 
                view: "Fake Tasks",
                filterByFormula: `AND({client_from_new_client}='Made Up Lamps', {client_visible})`,
                sort: [{field: 'due_date', direction: "desc"}]
            })
            .eachPage((records, fetchNextPage) => {
                console.log(records)
                setTasks(records);
                fetchNextPage();
            });
    }, []);

    if (loading) {
        return <SpinnerComponent />;
    } else {
        return (
            <>
                {/* Mobile view */}
                <div className='md:hidden'>
                    {tasks.map((task) => (
                        <TaskTableRow
                            key={task.id}
                            task={task}
                        />
                    ))}
                </div>
                {/* <div className='md:hidden'>
                    {tasks.map((task) => {
                        var due_date = task.fields.due_date
                        const abr_due_date = due_date.substring(due_date.length - 5)
                        return (
                            <div className="bg-white p-3 rounded-md shadow mb-1">
                                <div className='border-b border-blue-200 flex justify-between m-1'>
                                    <h1>{task.fields.Name}</h1>
                                    <button className='rounded-full px-2 bg-amber-200 mb-3 text-sm'>{task.fields.Status}</button>
                                </div>
                                <div className='flex justify-between mx-1'>
                                    <div>
                                        { task.fields.related_project_string ? (
                                            <>
                                                <h3 className='text-xs text-gray-400'>Related Project</h3>
                                                <button className='rounded-full px-2 border border-full px-3 my-3 text-xs bg-blue-100'>{task.fields.related_project_string}</button>
                                            </>
                                        ) : (
                                            null
                                        ) }
                                    </div>
                                    <div>
                                        <h3 className='text-xs text-gray-400'>Due Date</h3>
                                        <h3 className='text-md my-3'>{abr_due_date}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div> */}
                {/* Desktop view */}
                <div className='hidden md:block'>
                    <div className="flex flex-col">
                        <div className="overflow-x-auto">
                            <div className="p-1.5 w-full inline-block align-middle">
                            <div className="overflow-hidden border rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Task
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Project
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Due Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Status
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                    {tasks.map((task) => (
                                        <TaskTableRow
                                            key={task.id}
                                            task={task}
                                        />
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            
            </>
        )
    }
}

export default TaskTable;

{/* <Card>
    <Table marginTop="mt-0">
        <TableHead>
            <TableRow>
                <TableHeaderCell>Task</TableHeaderCell>
                <TableHeaderCell>Related Project</TableHeaderCell>
                <TableHeaderCell>Due Date</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {tasks.map((task) => (
                <TaskTableRow
                    key={task.id}
                    task={task}
                />
            ))}
        </TableBody>
    </Table>
</Card> */}