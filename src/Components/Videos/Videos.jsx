import React, { useEffect, useState } from 'react'
import PulseRowComponent from '../Objects/Animations/PulseRowComponent';
import Airtable from 'airtable';
import VideoCard from './VideoCard';

const base = new Airtable({ apiKey: 'keydxzcJdUXUCRGYy' }).base('appsc6BvDzAQRtjc2')

const Videos = () => {
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(videos?.length > 0) {
            setLoading(false)
        }
    }, [videos])

    useEffect(() => {
        base("client_videos")
            .select({ 
                view: "Fake Videos",
                //filterByFormula: `AND({client_from_new_client}='Made Up Lamps', {client_visible})`,
                // filterByFormula: `{status}='Todo'`,
            })
            .eachPage((records, fetchNextPage) => {
                console.log(records)
                setVideos(records);
                fetchNextPage();
            });
    }, []);

    if (loading) {
        return (
            <section class="text-gray-600 body-font">
                <div class="container px-2 py-2 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <PulseRowComponent />
                            </a>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <PulseRowComponent />
                            </a>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <PulseRowComponent />
                            </a>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <PulseRowComponent />
                            </a>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <PulseRowComponent />
                            </a>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <PulseRowComponent />
                            </a>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <PulseRowComponent />
                            </a>
                        </div>
                        
                        
                    </div>
                </div>
            </section>   
        )
    } else {
        return (
            <section class="text-gray-600 body-font">
                <div class="container px-2 py-2 mx-auto">
                    <div class="flex flex-wrap -m-4">
                            {videos.map((video) => (
                                <VideoCard
                                    key={video.id}
                                    video={video}
                                />
                            ))}
                    </div>
                </div>
            </section>   
        )
    }
}

export default Videos;