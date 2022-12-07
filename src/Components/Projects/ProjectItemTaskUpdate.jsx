import React from "react"

const ProjectItemTaskUpdate = ({taskUpdate}) => {

    var type_color = []
    {if (taskUpdate.fields.update_type == 'Task Completed') {
        type_color = 'bg-green-50'
    } else if (taskUpdate.fields.update_type == 'Task Delayed') {
        type_color = 'bg-red-50'
    } else if (taskUpdate.fields.update_type == 'New Task Created') {
        type_color = 'bg-slate-50'
    } else {
        type_color = 'bg-blue-50'
    }}

    return (
        <div class="flex relative pt-0 pb-6 items-start w-full">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex w-42 h-8 rounded-full inline-flex items-center justify-center relative z-10 title-font text-xs border-2 border-full border-gray-400">
                <div className="flex justify-center items-center rounded-l-full w-14 bg-blue-600 text-white h-7">{taskUpdate.fields.created_simple}</div>
                <div className={`flex justify-center items-center rounded-r-full w-28 ${type_color} h-7`}>{taskUpdate.fields.update_type}</div>
            </div>
            <div class="flex bg-blue-100 w-full rounded-lg border py-1 mx-1">
                <div class="flex w-full px-2">
                    <p class="leading-relaxed ">
                        {taskUpdate.fields.update}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectItemTaskUpdate;