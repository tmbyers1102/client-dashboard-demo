import React, { Fragment, useRef, useState, useEffect } from 'react'
import Airtable from 'airtable';
import { Dialog, Transition } from '@headlessui/react'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'
import ProjectItemTaskUpdate from './ProjectItemTaskUpdate'


const base = new Airtable({ apiKey: 'keydxzcJdUXUCRGYy' }).base('appsc6BvDzAQRtjc2')

const ProjectItemTask = ({ projectItemTask }) => {
    var status_color = []
    {if (projectItemTask.fields.Status == 'Done') {
        status_color = 'green'
    } else if (projectItemTask.fields.Status == 'In progress') {
        status_color = 'cyan'
    } else if (projectItemTask.fields.Status == 'Client Hold') {
        status_color = 'slate'
    } else {
        status_color = 'red'
    }}
    
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)

    var proj_item_task_as_string = projectItemTask.fields.Name

    const [taskUpdates, setTaskUpdates] = useState([])
    useEffect(() => {
        base("client_updates")
          .select({ 
            view: "Grid view",
            filterByFormula: `AND({client}='Made Up Lamps', {client_visible})`,
          })
          .eachPage((records, fetchNextPage) => {
            console.log(records)
            setTaskUpdates(records);
            fetchNextPage();
          });
    }, []);
    // useEffect(() => {
    //     projectItemTask.fields.client_updates.map((update) => (
    //         setTaskUpdates(update)
    //     ))
    // }, []);

    return (
        <>
            <div class="flex justify-center">
                <div class="grid grid-cols-6 gap-2 p-1.5 rounded-md bg-blue-200 min-w-full mt-2">
                    <div className='col-span-5'>
                        <h5 class="text-gray-900 text-sm leading-tight w-full mb-2">{projectItemTask.fields.Name}</h5>
                        <div className='flex'>
                            <h5 class="text-gray-400 text-xs leading-tight font-medium">Scheduled Work Date:</h5>
                            <p class="text-gray-800 text-xs ml-2">
                                {projectItemTask.fields.due_date}
                            </p>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <button
                            type="button"
                            class={`px-3 py-1 bg-${status_color}-100 text-${status_color}-600 text-xs leading-tight rounded-full shadow-md hover:bg-${status_color}-300 hover:shadow-lg transition duration-150 ease-in-out`}
                            onClick={() => setOpen(true)}
                            ref={cancelButtonRef}
                        >
                            {projectItemTask.fields.Status}
                        </button>
                    </div>
                </div>
            </div>
            {/* popup stuff */}
            {/* <TaskModal open={open} key={projectItemTask.id} projectItemTask={projectItemTask} taskUpdates={taskUpdates} /> */}
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
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-6 border-b items-center justify-between">
                                        <div className='flex items-center'>
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <RocketLaunchIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                            </div>
                                            <div className="text-center sm:ml-4 sm:text-left">
                                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                    {projectItemTask.fields.Name}
                                                </Dialog.Title>
                                            </div>
                                        </div>
                                        <button
                                            disabled
                                            type="button"
                                            class={`px-3 py-1 bg-${status_color}-100 border border-full border-gray-300 text-md leading-tight rounded-full`}
                                        >
                                            {projectItemTask.fields.Status}
                                        </button>
                                    </div>
                                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 grid grid-cols-4">
                                        <div className="flex items-start col-span-2 border-r mr-2">
                                            <table class="table-auto w-full mr-6">
                                                <tbody className=''>
                                                    <tr className='border-b'>
                                                        <td className='w-24'>Due Date:</td>
                                                        <td>{projectItemTask.fields.due_date}</td>
                                                    </tr>
                                                    <tr className=''>
                                                        <td>Notes</td>
                                                        <td className=''>{projectItemTask.fields.Notes}</td>
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
                                                            return projectItemTask.id === taskUpdate.fields.associated_task_record_id_string_copy ? (
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

export default ProjectItemTask;

// {taskUpdates.map((taskUpdate) => {
//     return projectItemTask.id === taskUpdate.fields.associated_task_record_id_string ? (
//         <ProjectItemTaskUpdate key={taskUpdate.id} taskUpdate={taskUpdate} />
//     ) : (
//         <h5>hello</h5>
//     )
// })}

// {taskUpdates.map((taskUpdate) => (
//     <ProjectItemTaskUpdate key={taskUpdate.id} taskUpdate={taskUpdate} />
// ))}