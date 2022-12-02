import React, { useEffect } from 'react'
import * as statusIcons from '../Objects/StatusIcons';


const QuestionsCard = ({question}) => {

    var answer_value = []
    var status_color = []
    {if (question.fields.Answer) {
        answer_value = question.fields.Answer
        status_color = 'bg-green-100'
    } else {
        answer_value = 'Answer Pending... We will alert you when the answer to this question is available!'
        status_color = 'bg-gray-100'
    }}

    return (
        <>
            <div class="flex rounded-lg h-full w-3/4 border-2 border-blue-700 bg-gray-200 p-8 mr-24 flex-col">
                <div class="flex items-center mb-3">
                    <div class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" class="w-10 h-10" viewBox="0 0 24 24">
                            {/* <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path> */}
                            <path strokeLinecap="round" strokeLinejoin="round" d={statusIcons.QUESTION_ICON} />
                        </svg>
                    </div>
                    <h2 class="text-gray-900 text-sm title-font font-medium">Status: 
                        <button disabled className={`ml-3 ${status_color} border border-full border-gray-400 p-2 rounded-full text-xs`}>
                            {question.fields.Status}
                        </button>
                    </h2>
                </div>
                <div class="flex-grow">
                    <p class="leading-relaxed text-base">
                        {question.fields.raw_question}
                    </p>
                </div>
            </div>
            <div className='w-full items-end flex mb-16 mt-3'>

                <div class="justify-self-end rounded-lg h-full bg-blue-100 p-8 mt-3 w-full ml-96">
                    <div class="flex items-center mb-3 justify-end">
                        <h2 class="text-gray-900 text-lg title-font font-medium">Feedonomics Answer</h2>
                        <div class="w-12 h-12 ml-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" class="w-10 h-10" viewBox="0 0 24 24">
                                <path d={statusIcons.GRAD_ICON}></path>
                            </svg>
                        </div>
                    </div>
                    <div class="flex-grow">
                        <p class="flex justify-end leading-relaxed text-base">
                        {answer_value}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionsCard;