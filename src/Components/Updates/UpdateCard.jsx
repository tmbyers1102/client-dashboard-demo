import React, { useEffect, useState } from 'react'
import {
    Badge,
} from "@tremor/react";
import * as statusIcons from '../Objects/StatusIcons';
import UpdateScreenshot from './UpdateScreenshot';

const UpdateCard = ({ update }) => {
    var update_color = []
    var update_icon = []

    {if (update.fields.update_type == 'Promotion Complete') {
        update_color= 'orange'
        // bar chart
        update_icon = statusIcons.BAR_CHART_ICON
    } else if (update.fields.update_type == 'Question Answered') {
        update_color= 'lime'
        //Question mark
        update_icon = statusIcons.QUESTION_ICON
    } else if (update.fields.update_type == 'Question Posted') {
        update_color= 'sky'
        // question dark
        update_icon = statusIcons.QUESTION_ICON
    } else if (update.fields.update_type == 'Task Completed') {
        update_color= 'emerald'
        // check shield
        update_icon = statusIcons.CHECK_SHEILD_ICON
    } else if (update.fields.update_type == 'Task Delayed') {
        update_color= 'amber'
        // exclaim
        update_icon = statusIcons.EXCLAIM_ICON
    } else if (update.fields.update_type == 'New Task Created') {
        update_color= 'violet'
        // rocket
        update_icon = statusIcons.ROCKET_ICON
    } else if (update.fields.update_type == 'New Project Created') {
        update_color= 'teal'
        // bolt
        update_icon = statusIcons.BOLT_ICON
    } else if (update.fields.update_type == 'Project Completed') {
        update_color= 'fuchia'
        // trophy
        update_icon = statusIcons.TROPHY_ICON
    } else {
        update_color= 'zinc'
        // smile
        update_icon = statusIcons.SMILE_ICON
    }}
    return (
        <div class="flex relative pt-0 pb-8 sm:items-center md:w-2/3 lg:w-full mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-indigo-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-20 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-700 text-white relative z-10 title-font font-medium text-sm">{update.fields.created_simple}</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row bg-white rounded-lg border border-full border-indigo-400 py-4 mx-3">
                <div class="flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-700 rounded-full inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d={update_icon} />
                    </svg>
                </div>
                <div class="container">
                    <div class="flex items-center h-full">
                        <div class="w-2/3 sm:pl-6 mt-6 sm:mt-0">
                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">{update.fields.update}</h2>
                            <div class="mt-3">
                                <Badge color={update_color} text={update.fields.update_type}/>
                            </div>
                            <p class="leading-relaxed mt-3">
                                {update.fields.notes}
                            </p>
                            
                        </div>
                        <div class="flex px-3">
                            <UpdateScreenshot />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateCard


{/* <UpdateScreenshot /> */}