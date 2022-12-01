import React, { useEffect, useState } from 'react'
import Airtable from 'airtable';
import {
    Badge,
    Bold,
    Card,
    Text,
    List,
    ListItem,
    Subtitle,
} from "@tremor/react";
import PulseRowComponent from '../Objects/Animations/PulseRowComponent';
import ProjectItemTask from './ProjectItemTask';

const base = new Airtable({ apiKey: 'keydxzcJdUXUCRGYy' }).base('appsc6BvDzAQRtjc2')

const ProjectItem = ({ projectItem }) => {
    const [projectItemTasks, setProjectItemTasks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      if(projectItemTasks?.length > 0) {
         setLoading(false)
      }
    }, [projectItemTasks])

    useEffect(() => {
        base("Tasks")
          .select({ 
            view: "Fake Tasks",
            filterByFormula: `AND({new_client}='Made Up Lamps')`,
          })
          .eachPage((records, fetchNextPage) => {
            console.log('projectItemTasks: '+records)
            setProjectItemTasks(records);
            fetchNextPage();
          });
    }, []);

    var status_color = []
    {if (projectItem.fields.Status == 'Complete') {
        status_color = 'emerald'
    } else if (projectItem.fields.Status == 'In progress') {
        status_color = 'sky'
    } else if (projectItem.fields.Status == 'Not Started') {
        status_color = 'slate'
    } else {
        status_color = 'rose'
    }};
    
    if (loading) {
        return (
            <div class="self-start">
                <Card maxWidth="max-w-md">
                    <Bold>{projectItem.fields.raw_name}</Bold>
                    <List marginTop="mt-2">

                        <ListItem spaceX="space-x-0">
                            <Subtitle>Status</Subtitle>
                            <Badge text={projectItem.fields.Status} color={status_color}/>
                        </ListItem>
                        <ListItem spaceX="space-x-0">
                            <Subtitle>Start Date</Subtitle>
                            <Text>{projectItem.fields.start_date}</Text>
                        </ListItem>
                        <ListItem spaceX="space-x-0">
                            <Subtitle>Completion Date</Subtitle>
                            <Text>{projectItem.fields.completion_date}</Text>
                        </ListItem>
                    </List>
                    <PulseRowComponent />
                </Card>
            </div>
        )
    } else {
        return (
            <div class="self-start">
                <Card maxWidth="max-w-md">
                    <Bold>{projectItem.fields.raw_name}</Bold>
                    <List marginTop="mt-2">

                        <ListItem spaceX="space-x-0">
                            <Subtitle>Status</Subtitle>
                            <Badge text={projectItem.fields.Status} color={status_color}/>
                        </ListItem>
                        <ListItem spaceX="space-x-0">
                            <Subtitle>Start Date</Subtitle>
                            <Text>{projectItem.fields.start_date}</Text>
                        </ListItem>
                        <ListItem spaceX="space-x-0">
                            <Subtitle>Completion Date</Subtitle>
                            <Text>{projectItem.fields.completion_date}</Text>
                        </ListItem>
                    </List>
                    {projectItemTasks.map((projectItemTask) => {
                        return projectItem.id === projectItemTask.fields.associated_project_item_record_id_string ? (
                        <>
                            <ProjectItemTask key={projectItemTask.id} projectItemTask={projectItemTask} />
                        </>
                        ) : (
                            null
                        )
                    })}
                </Card>
            </div>
        )
            }

}

export default ProjectItem