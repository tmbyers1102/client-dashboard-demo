import React from "react";
import * as screenshotURL from '../Objects/Images/UpdateScreenshotFallbacks'

const UpdateScreenshot = ({ theUpdate, update_type, ss_link }) => {

    // var screenshot_link = []
    // {if (theUpdate.fields.update_type = 'New Project Created') {
    //     screenshot_link = screenshotURL.GOOGLE_PROMO_TAG
    // } else if (theUpdate.fields.update_type = 'Project Completed') {
    //     screenshot_link = screenshotURL.AB_TEST_ICON
    // } else {
    //     screenshot_link = screenshotURL.META_COMMERCE_MANAGER
    // }}

    return (
        <div class="h-full w-48 border border-indigo-800 rounded-lg overflow-hidden bg-indigo-100">
            <img class="lg:h-36 md:h-24 w-full object-cover object-center" src={ss_link} alt="blog" />
        </div>
    )
}

export default UpdateScreenshot;