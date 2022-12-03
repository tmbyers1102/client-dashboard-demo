import React, { useEffect, useState } from 'react'
import Airtable from 'airtable';
import SpinnerComponent from '../Objects/Animations/SpinnerComponent';
import QuestionsCard from './QuestionsCard';

const base = new Airtable({ apiKey: 'keydxzcJdUXUCRGYy' }).base('appsc6BvDzAQRtjc2')

const Questions = () => {
    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        if(questions?.length > 0) {
           setLoading(false)
        }
      }, [questions])

    useEffect(() => {
        base("Questions")
          .select({ 
            view: "All Questions",
            // filterByFormula: `AND({client}='Made Up Lamps',{client_visible})`,
            // sort: [{field: 'created', direction: "desc"}]
          })
          .eachPage((records, fetchNextPage) => {
            console.log('Questions: '+records)
            setQuestions(records);
            fetchNextPage();
          });
    }, []);

    if (loading) {
        return (
            <div class="flex mt-6 pt-6 w-full h-96 mx-auto">
                <SpinnerComponent />  
            </div>
        )
    } else {
        return (
            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto flex flex-wrap">
                    <>
                        {questions.map((question) => (
                            <QuestionsCard
                                key={question.id}
                                question={question}
                            />
                        ))}
                    </>
                </div>
            </section>
        )
    }
}

export default Questions;

{/* <UpdateCard key={update.id} update={update} /> */}