import React, { useEffect, useState } from 'react'
import {
    Badge,
} from "@tremor/react";
import * as statusIcons from '../Objects/StatusIcons';
import * as screenshotURL from '../Objects/Images/UpdateScreenshotFallbacks'
import UpdateScreenshot from './UpdateScreenshot';

const UpdateCard = ({ update }) => {
    var update_color = []
    var update_icon = []
    var ss_link = []

    {if (update.fields.update_type == 'Promotion Complete') {
        update_color= 'orange'
        // bar chart
        update_icon = statusIcons.BAR_CHART_ICON
        ss_link = screenshotURL.GOOGLE_PROMO_TAG
    } else if (update.fields.update_type == 'Question Answered') {
        update_color= 'lime'
        //Question mark
        update_icon = statusIcons.QUESTION_ICON
        ss_link = screenshotURL.META_COMMERCE_MANAGER
    } else if (update.fields.update_type == 'Question Posted') {
        update_color= 'sky'
        // question dark
        update_icon = statusIcons.QUESTION_ICON
        ss_link = screenshotURL.FDX_WHEEL
    } else if (update.fields.update_type == 'Task Completed') {
        update_color= 'emerald'
        // check shield
        update_icon = statusIcons.CHECK_SHEILD_ICON
        ss_link = screenshotURL.FDX_WHEEL
    } else if (update.fields.update_type == 'Task Delayed') {
        update_color= 'amber'
        // exclaim
        update_icon = statusIcons.EXCLAIM_ICON
        ss_link = screenshotURL.FDX_WHEEL
    } else if (update.fields.update_type == 'New Task Created') {
        update_color= 'violet'
        // rocket
        update_icon = statusIcons.ROCKET_ICON
        ss_link = screenshotURL.FDX_WHEEL
    } else if (update.fields.update_type == 'New Project Created') {
        update_color= 'teal'
        // bolt
        update_icon = statusIcons.BOLT_ICON
        ss_link = screenshotURL.FDX_WHEEL
    } else if (update.fields.update_type == 'Project Completed') {
        update_color= 'fuchia'
        // trophy
        update_icon = statusIcons.TROPHY_ICON
        ss_link = screenshotURL.FDX_WHEEL
    } else {
        update_color= 'zinc'
        // smile
        update_icon = statusIcons.SMILE_ICON
        ss_link = screenshotURL.GOOGLE_PROMO_TAG
    }}
    return (
        <div class="flex relative pt-0 pb-2 lg:pb-8 sm:items-center w-full">
            <div class="hidden lg:flex h-full w-6 absolute inset-0 items-center justify-center">
                <div class="h-full w-1 bg-indigo-200 pointer-events-none"></div>
            </div>
            <div class="hidden lg:flex flex-shrink-0 w-20 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-700 text-white relative z-10 title-font font-medium text-sm">{update.fields.created_simple}</div>
            <div class="flex-grow md:pl-4 flex sm:items-center items-start flex-col sm:flex-row bg-white rounded-lg border border-full border-indigo-400 py-4 lg:mx-3">
                <div class="hidden lg:flex flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-700 rounded-full inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d={update_icon} />
                    </svg>
                </div>
                <div class="container mx-3">
                        <div className='lg:hidden leading-none font-bold'>
                            <div className='flex flex-row justify-between'>
                                <h4 className=''>{update.fields.update}</h4>
                                <div class="text-xs pr-3 mx-2 whitespace-nowrap">
                                        <button className={`px-2 py-1 flex items-center text-blue-600`} disabled>
                                            {update.fields.created_simple}
                                        </button>
                                </div>
                            </div>
                            <div>
                                <button className={`text-xs mt-2 bg-gray-200 px-2 py-1 rounded-md flex items-center text-blue-600`} disabled>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={update_icon} />
                                    </svg>
                                    {update.fields.update_type}
                                </button>
                            </div>
                        </div>
                    <div class="hidden lg:flex justify-between items-center h-full">
                        <div class="">
                            <h2 class="font-light lg:font-medium text-gray-900 mb-1 text-sm md:text-md">{update.fields.update}</h2>
                            <div class="text-xs mt-3">
                                <Badge color={update_color} text={update.fields.update_type}/>
                            </div>
                            <p class="text-xs lg:text-sm mt-3">
                                {update.fields.notes}
                            </p>
                            
                        </div>
                        <div class="px-6 invisible lg:visible">
                            <UpdateScreenshot key={update.id} theUpdate={update} update_type={update.fields.update_type} ss_link={ss_link}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateCard


{/* <UpdateScreenshot /> */}