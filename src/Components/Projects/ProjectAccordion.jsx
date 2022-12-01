import React, { useEffect, useState } from 'react'
import Airtable from 'airtable';
import {
    AccordionList,
} from "@tremor/react";
import ProjectAccordionRow from './ProjectAccordionRow';

const base = new Airtable({ apiKey: 'keydxzcJdUXUCRGYy' }).base('appsc6BvDzAQRtjc2')
  
const ProjectAccordion = () => {

    const [projects, setProjects] = useState([])
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        base("Projects")
          .select({ 
            view: "Grid view",
            filterByFormula: `AND({Clients At-A-Glance}='Made Up Lamps')`,
          })
          .eachPage((records, fetchNextPage) => {
            console.log(records)
            setProjects(records);
            fetchNextPage();
          });
        base("tasks")
          .select({ 
            view: "Tasks",
            filterByFormula: `AND({client_from_new_client}='Made Up Lamps',{status}='Todo')`,
          })
          .eachPage((records, fetchNextPage) => {
            console.log(records)
            setTasks(records);
            fetchNextPage();
          });
    }, []);

    return (
        <AccordionList>
          {projects.map((project) => (
            <ProjectAccordionRow key={project.id} project={project}/>
          ))}
        </AccordionList>
    )

};
  
export default ProjectAccordion