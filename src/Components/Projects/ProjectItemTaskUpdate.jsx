import React from "react"

const ProjectItemTaskUpdate = ({taskUpdate}) => {
    return (
        <div class="flex relative pt-0 pb-3 sm:items-center w-96">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-20 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-700 text-white relative z-10 title-font font-medium text-xs">{taskUpdate.fields.created_simple}</div>
            <div class="flex bg-blue-200 w-full rounded-lg border py-1 mx-1">
                <div class="container">
                    <div class="flex justify-between items-center h-full">
                        <div class="w-full px-2">
                            <p class="leading-relaxed">
                                {taskUpdate.fields.update}
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItemTaskUpdate;