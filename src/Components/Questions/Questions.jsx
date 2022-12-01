import React from 'react';
import * as statusIcons from '../Objects/StatusIcons';

const Questions = () => {
    return (
        <>
            <div class="mb-16">
                <div class="flex rounded-lg h-full border-2 border-indigo-700 bg-gray-200 p-8 mr-24 flex-col">
                    <div class="flex items-center mb-3">
                        <div class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" class="w-10 h-10" viewBox="0 0 24 24">
                                {/* <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path> */}
                                <path strokeLinecap="round" strokeLinejoin="round" d={statusIcons.QUESTION_ICON} />
                            </svg>
                        </div>
                        <h2 class="text-gray-900 text-lg title-font font-medium">Promotions on Meta Commerce Manager</h2>
                    </div>
                    <div class="flex-grow">
                        <p class="leading-relaxed text-base">
                            Here is a sample question: Is there anything Feedonomics can do to help standardize [sale_price] promotions on the Meta Commerce Manager?
                        </p>
                    </div>
                </div>
                <div class="flex justify-end rounded-lg h-full bg-blue-100 p-8 ml-24 mt-3 flex-col">
                    <div class="flex items-center mb-3 justify-end">
                        <h2 class="text-gray-900 text-lg title-font font-medium">Feedonomics Answer</h2>
                        <div class="w-12 h-12 ml-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" class="w-10 h-10" viewBox="0 0 24 24">
                                <path d={statusIcons.GRAD_ICON}></path>
                            </svg>
                        </div>
                    </div>
                    <div class="flex-grow">
                        <p class="flex justify-end leading-relaxed text-base">
                            Feedonomics cannot configure any promotions within the Meta Commerce Manager, but we can ensure [sale_price] logic is properly applied and matching the prices within your website's product page.
                        </p>
                    </div>
                </div>
            </div>
            <div class="mb-16">
                <div class="flex rounded-lg h-full border-2 border-indigo-700 bg-gray-200 p-8 mr-24 flex-col">
                    <div class="flex items-center mb-3">
                        <div class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" class="w-10 h-10" viewBox="0 0 24 24">
                                {/* <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path> */}
                                <path strokeLinecap="round" strokeLinejoin="round" d={statusIcons.QUESTION_ICON} />
                            </svg>
                        </div>
                        <h2 class="text-gray-900 text-lg title-font font-medium">Promotions on Meta Commerce Manager</h2>
                    </div>
                    <div class="flex-grow">
                        <p class="leading-relaxed text-base">
                            Here is a sample question: Is there anything Feedonomics can do to help standardize [sale_price] promotions on the Meta Commerce Manager?
                        </p>
                    </div>
                </div>
                <div class="flex justify-end rounded-lg h-full bg-blue-100 p-8 ml-24 mt-3 flex-col">
                    <div class="flex items-center mb-3 justify-end">
                        <h2 class="text-gray-900 text-lg title-font font-medium">Feedonomics Answer</h2>
                        <div class="w-12 h-12 ml-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" class="w-10 h-10" viewBox="0 0 24 24">
                                <path d={statusIcons.GRAD_ICON}></path>
                            </svg>
                        </div>
                    </div>
                    <div class="flex-grow">
                        <p class="flex justify-end leading-relaxed text-base">
                            Feedonomics cannot configure any promotions within the Meta Commerce Manager, but we can ensure [sale_price] logic is properly applied and matching the prices within your website's product page.
                        </p>
                    </div>
                </div>
            </div>
            <div class="mb-16">
                <div class="flex rounded-lg h-full border-2 border-indigo-700 bg-gray-200 p-8 mr-24 flex-col">
                    <div class="flex items-center mb-3">
                        <div class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" class="w-10 h-10" viewBox="0 0 24 24">
                                {/* <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path> */}
                                <path strokeLinecap="round" strokeLinejoin="round" d={statusIcons.QUESTION_ICON} />
                            </svg>
                        </div>
                        <h2 class="text-gray-900 text-lg title-font font-medium">Promotions on Meta Commerce Manager</h2>
                    </div>
                    <div class="flex-grow">
                        <p class="leading-relaxed text-base">
                            Here is a sample question: Is there anything Feedonomics can do to help standardize [sale_price] promotions on the Meta Commerce Manager?
                        </p>
                    </div>
                </div>
                <div class="flex justify-end rounded-lg h-full bg-blue-700 text-white p-8 ml-24 mt-3 flex-col">
                    <div class="flex items-center mb-3 justify-end">
                        <h2 class="text-white text-lg title-font font-medium">Answer Pending</h2>
                        <div class="w-12 h-12 ml-3 inline-flex items-center justify-center rounded-full bg-amber-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" class="w-10 h-10" viewBox="0 0 24 24">
                                <path d={statusIcons.GRAD_ICON}></path>
                            </svg>
                        </div>
                    </div>
                    <div class="flex-grow">
                        <p class="flex justify-end leading-relaxed text-base">
                            The Enterprise Team is reviewing your question and researching to find the best answer. We will notify you when our answer to this question has been posted!
                        </p>
                    </div>
                </div>
            </div>
            
        </>
      )
}

export default Questions;