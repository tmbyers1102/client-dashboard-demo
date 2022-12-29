import React, { useEffect, useState } from 'react'
import Airtable from 'airtable';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Badge,
    ProgressBar
} from "@tremor/react";
import ProjectItem from './ProjectItem';

const base = new Airtable({ apiKey: 'keydxzcJdUXUCRGYy' }).base('appsc6BvDzAQRtjc2')

const ProjectAccordionRow = ({ project }) => {
    const [projectItems, setProjectItems] = useState([])
    useEffect(() => {
        base("Project Items")
          .select({ 
            view: "Grid view",
            filterByFormula: `AND({Clients At-A-Glance}='Made Up Lamps')`,
          })
          .eachPage((records, fetchNextPage) => {
            console.log('projectItems: '+records)
            setProjectItems(records);
            fetchNextPage();
          });
    }, []);

    var random_number = Math.floor(Math.random() * 31) + 50

    var status_color = []

    {if (project.fields.Status == 'Not Started') {
        status_color= 'gray'
    } else if (project.fields.Status == 'In progress') {
        status_color= 'green'
    } else {
        status_color= 'sky'
    }}

    return (
        <Accordion>
        <AccordionHeader>
            <>
                <div class="md:flex w-full items-center gap-1">
                    <h3 class="w-96 mb-3 md:mb-0">{project.fields.Name}</h3>
                    <ProgressBar showAnimation={true} percentageValue={random_number} color={status_color} marginTop="mt-0" tooltip={random_number+'% Complete'} />
                    <button className={`bg-${status_color}-100 rounded-full px-3 text-sm whitespace-nowrap ml-12 mt-3 md:mt-0`}>{project.fields.Status}</button>
                </div>
            </>
        </AccordionHeader>
        <AccordionBody>
            <div class="md:flex">
                {projectItems.map((projectItem) => {
                    return projectItem.fields.associated_project_record_id_string === project.fields.project_record_id ? (
                    <div class="flex md:m-3">
                        <ProjectItem key={projectItem.id} projectItem={projectItem}/>
                    </div>
                    ) : (
                        null
                    );
                })}
            </div>
        </AccordionBody>
    </Accordion>
    )

}

export default ProjectAccordionRow


//     
