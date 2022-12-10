import React, { useEffect, useState } from 'react'
import * as screenshotURL from '../Objects/Images/UpdateScreenshotFallbacks'

const DocCard = ({doc}) => {

    var doc_logo = []

    {if (doc.fields.related_entity == 'Google') {
        doc_logo = screenshotURL.GOOGLE_G
    } else if (doc.fields.related_entity == 'Facebook') {
        doc_logo = screenshotURL.FACEBOOK_F_LOGO_BLUE
    } else if (doc.fields.related_entity == 'Feedonomics') {
        doc_logo = screenshotURL.FDX_LOGO_BLUE_OLD
    } else if (doc.fields.related_entity == 'TikTok') {
        doc_logo = screenshotURL.TIKTOK_LOGO_BLACK
    } else if (doc.fields.related_entity == 'Snapchat') {
        doc_logo = screenshotURL.SNAP_LOGO_WHITE

    } else if (doc.fields.related_entity == 'Criteo') {
        doc_logo = screenshotURL.META_COMMERCE_MANAGER
    } else {
        doc_logo = screenshotURL.META_COMMERCE_MANAGER
    }}

    return (
        <div class="lg:w-1/3 md:w-1/2 p-3 w-full h-48 flex">
            <div className='bg-white rounded-lg flex border border-full'>
                <a
                    target={'_blank'}
                    href={doc.fields.doc_url}
                    class={`bg-gray-100 hover:bg-gray-200 block relative overflow-hidden flex justify-center items-center h-full w-1/3 rounded-l-lg transition duration-300`}
                >
                {doc.fields.related_entity ? (
                    <>
                        <img src={doc_logo} className="h-24" alt="doc logo"/>
                    </>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="h-24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                )}
                </a>
                <h2 class="text-gray-900 title-font text-lg font-medium m-3 w-2/3">{doc.fields.doc_title} | {doc.fields.related_entity}</h2>
            </div>
        </div>
    )

}

export default DocCard;
