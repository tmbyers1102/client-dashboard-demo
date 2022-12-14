import React, { Fragment, useEffect, useState, useRef } from 'react'
import Airtable from 'airtable';
import { Dialog, Transition } from '@headlessui/react'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'
import {
    TableRow,
    TableCell,
    Text,
    Badge,
} from "@tremor/react";
import ProjectItemTaskUpdate from '../Projects/ProjectItemTaskUpdate';

const base = new Airtable({ apiKey: 'keydxzcJdUXUCRGYy' }).base('appsc6BvDzAQRtjc2')

const TaskTableRow = ({task}) => {
    var due_date = task.fields.due_date
    const abr_due_date = due_date.substring(due_date.length - 5)
    
    var status_color = []
    var status_color2 = []
    {if (task.fields.Status == 'Todo') {
        status_color= 'red'
        status_color2= 'bg-red-200'
    } else if (task.fields.Status == 'Done') {
        status_color= 'green'
        status_color2= 'bg-green-200'
    } else if (task.fields.Status == 'Stuck') {
        status_color= 'amber'
        status_color2= 'bg-amber-200'
    } else {
        status_color= 'zinc'
        status_color2= 'bg-zinc-200'
    }}

    var project_color = []
    {if (task.fields.related_project_string == 'Standard Client Onboarding') {
        project_color= 'orange'
    } else if (task.fields.related_project_string == 'Product Noun Optimizations') {
        project_color= 'indigo'
    } else {
        project_color= 'slate'
    }}

    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)

    const [taskUpdates, setTaskUpdates] = useState([])
    useEffect(() => {
        base("client_updates")
          .select({ 
            view: "Grid view",
            filterByFormula: `AND({client}='Made Up Lamps', {client_visible})`,
            //sort: [{field: 'due_date', direction: "desc"}]
          })
          .eachPage((records, fetchNextPage) => {
            console.log(records)
            setTaskUpdates(records);
            fetchNextPage();
          });
    }, []);

    return (
        <>
            {/* Mobile view */}
            <div className='md:hidden'>
                <div className="bg-white p-3 rounded-md shadow mb-1">
                    <div className='border-b border-blue-200 flex justify-between m-1'>
                        <h1>{task.fields.Name}</h1>
                        <button
                            className={`rounded-full px-2 py-1 ${status_color2} mb-3 text-xs`}
                            onClick={() => setOpen(true)}
                            ref={cancelButtonRef}
                        >
                            {task.fields.Status}
                        </button>
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
            </div>
            {/* desktop view */}
            <tr className='hidden md:table-row bg-white hover:bg-blue-50'>
                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    {task.fields.Name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    { task.fields.related_project_string ? (
                        <button disabled className={`bg-${project_color}-100 px-3 py-1 text-xs rounded-full border border-full border-${project_color}-300`}>
                            {task.fields.related_project_string}
                        </button>
                    ) : (
                        null
                    ) }
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    {abr_due_date}
                </td>
                <td className="py-4 text-sm font-medium whitespace-nowrap">
                    <div className='flex justify-end mr-1'>
                        <button
                                type="button"
                                class={`flex px-3 py-1 bg-${status_color}-100 text-${status_color}-600 text-xs leading-tight rounded-full shadow-md hover:shadow-xl transition duration-150 ease-in-out`}
                                onClick={() => setOpen(true)}
                                ref={cancelButtonRef}
                        >
                            {task.fields.Status}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
            

            {/* popup stuff */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl">
                                    <div className="bg-blue-50 px-4 py-3 md:flex md:px-6 border-b items-center justify-between">
                                        <div className='flex items-center justify-between w-full'>
                                            <div className='flex items-center'>
                                                <div className="md:mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                                    <RocketLaunchIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                                </div>
                                                <div className="text-center ml-4 md:text-left">
                                                    <Dialog.Title as="h3" className="text-sm md:text-lg font-medium text-gray-900">
                                                        {task.fields.Name}
                                                    </Dialog.Title>
                                                </div>
                                            </div>
                                            <button
                                                disabled
                                                type="button"
                                                class={`px-3 py-1 bg-${status_color}-100 border border-full border-gray-300 text-md leading-tight rounded-full`}
                                            >
                                                {task.fields.Status}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 grid grid-cols-1 md:grid-cols-4">
                                        <div className="flex items-start col-span-2 border-r mr-2">
                                            <table class="table-auto w-full mr-6">
                                                <tbody className=''>
                                                    <tr className='border-b'>
                                                        <td className='w-24'>Due Date:</td>
                                                        <td>{abr_due_date}</td>
                                                    </tr>
                                                    <tr className=''>
                                                        <td>Notes</td>
                                                        <td className=''>{task.fields.Notes}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="sm:flex sm:items-start col-span-2">
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                    Updates
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <div className="text-sm text-gray-500">
                                                        {taskUpdates.map((taskUpdate) => {
                                                            return task.id === taskUpdate.fields.associated_task_record_id_string_copy ? (
                                                                <ProjectItemTaskUpdate key={taskUpdate.id} taskUpdate={taskUpdate} />
                                                            ) : (
                                                                null
                                                            )
                                                        })}
                                                    </div>
                                                    <p className="text-sm text-gray-500">
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 border-t">
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default TaskTableRow;

// contact DMV with cert of death to get the title transferred to dad