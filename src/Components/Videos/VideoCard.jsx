import React, { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { VideoCameraIcon } from '@heroicons/react/24/outline'
import PulseRowComponent from '../Objects/Animations/PulseRowComponent';




const VideoCard = ({video}) => {
    function makeVidNull() {
        var element = document.getElementById("iframeDiv");
        element.classList.add("myiframeStyle");
    }

    var video_code = video.fields.video_url_id

    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)

    return  (
        <>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative rounded overflow-hidden" onClick={() => setOpen(true)} ref={cancelButtonRef}>
                <iframe
                    src={`https://www.youtube.com/embed/${video_code}`}
                    title={video.fields.video_title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className='md:pointer-events-none'
                ></iframe>
                {/* <div className='w-full h-32 bg-red-300 m-3 p-3'></div> */}
            </a>
            <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">{video.fields.video_title}</h2>
            </div>
        </div>
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
                                <Dialog.Panel className="relative transform overflow-hidden lg:h-screen rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-6xl">
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-6 border-b items-center justify-between">
                                        <div className='flex items-center'>
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <VideoCameraIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                            </div>
                                            <div className="text-center sm:ml-4 sm:text-left">
                                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                    {video.fields.video_title}
                                                </Dialog.Title>
                                            </div>
                                        </div>
                                        <button
                                            disabled
                                            type="button"
                                            class={`px-3 py-1 bg-amber-100 border border-full border-gray-300 text-md leading-tight rounded-full`}
                                        >
                                            WWWWWWW
                                        </button>
                                    </div>
                                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full">
                                        <div className='w-full'>
                                            <a class="block relative rounded overflow-hidden">
                                                <iframe src={`https://www.youtube.com/embed/${video_code}`} className="w-full lg:h-screen" title={video.fields.video_title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </a>
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
};

export default VideoCard;