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
        status_color= 'slate'
    } else if (project.fields.Status == 'In progress') {
        status_color= 'green'
    } else {
        status_color= 'sky'
    }}

    return (
        <Accordion>
        <AccordionHeader>
            <>
            <div class="flex w-full items-center mx-3 gap-9">

                <h3 class="w-96 mx-3 text-left">{project.fields.Name}</h3>
                <ProgressBar showAnimation={true} percentageValue={random_number} color={status_color} marginTop="mt-2" tooltip='Percentage complete'/>
                <Badge
                    text={project.fields.Status}
                    color={status_color}
                />
            </div>
            </>
        </AccordionHeader>
        <AccordionBody>
            <div class="flex">
                {projectItems.map((projectItem) => {
                    return projectItem.fields.associated_project_record_id_string === project.fields.project_record_id ? (
                    <div class="flex m-3">
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
