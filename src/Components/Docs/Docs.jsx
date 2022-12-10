import React, { useEffect, useState } from 'react'
import PulseRowComponent from '../Objects/Animations/PulseRowComponent';
import Airtable from 'airtable';
import DocCard from './DocCard';

const base = new Airtable({ apiKey: 'keydxzcJdUXUCRGYy' }).base('appsc6BvDzAQRtjc2')

const Docs = () => {
    const [docs, setDocs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(docs?.length > 0) {
            setLoading(false)
        }
    }, [docs])

    useEffect(() => {
        base("client_docs")
            .select({ 
                view: "Grid view",
                //filterByFormula: `AND({client_from_new_client}='Made Up Lamps', {client_visible})`,
                // filterByFormula: `{status}='Todo'`,
            })
            .eachPage((records, fetchNextPage) => {
                console.log(records)
                setDocs(records);
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
                <div class="py-2 w-full">
                    <div class="flex flex-wrap w-full">
                        {docs.map((doc) => (
                            <DocCard    
                                key={doc.id}
                                doc={doc}
                            />
                        ))}
                    </div>
                </div>
            </section>   
        )
    }
}

export default Docs;
