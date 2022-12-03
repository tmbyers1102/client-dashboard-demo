import React from "react"

const QuestionCardAnswerLinkButton = ({question}) => {

    return (
        <div>
            <a href={question.fields.answer_article_link} rel="noopener noreferrer" target="_blank">
            <button className='flex bg-blue-600 p-3 rounded-md mt-2 hover:bg-blue-700 text-white text-xs'>
                {question.fields.answer_article_title}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            </button>
            </a>
        </div>
    )

}

export default QuestionCardAnswerLinkButton