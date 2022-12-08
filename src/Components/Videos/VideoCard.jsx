import React from 'react';
import PulseRowComponent from '../Objects/Animations/PulseRowComponent';


const VideoCard = ({video}) => {
    var video_code = video.fields.video_url_id

    return  (
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative rounded overflow-hidden">
                <iframe src={`https://www.youtube.com/embed/${video_code}`} title={video.fields.video_title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </a>
            <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">{video.fields.video_title}</h2>
            </div>
        </div>
    )
};

export default VideoCard;