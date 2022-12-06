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
        status_color = 'green'
    } else if (projectItem.fields.Status == 'In progress') {
        status_color = 'blue'
    } else if (projectItem.fields.Status == 'Not Started') {
        status_color = 'slate'
    } else {
        status_color = 'red'
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
            <>

            <div class="flex justify-center">
                <div class="grid grid-cols-6 gap-2 content-start p-3 rounded-md shadow-lg bg-blue-50 min-w-full mt-2 border">
                    <div className='col-span-4 h-20'>
                        <h5 class="text-gray-900 text-sm leading-tight w-full mb-2">{projectItem.fields.raw_name}</h5>
                        <div className='flex'>
                            <h5 class="text-gray-400 text-xs leading-tight font-medium">Start Date:</h5>
                            <p class="text-gray-800 text-xs ml-2">
                              {projectItem.fields.start_date}
                            </p>
                        </div>
                        <div className='flex'>
                            <h5 class="text-gray-400 text-xs leading-tight font-medium">End Date:</h5>
                            <p class="text-gray-800 text-xs ml-2">
                                {projectItem.fields.completion_date}
                            </p>
                        </div>
                    </div>
                    <div className='col-span-2 w-full grid justify-items-end max-h-3'>
                        <button
                            type="button"
                            class={`px-2 py-1 bg-${status_color}-100 text-gray-600 text-xs leading-tight rounded-full shadow-md hover:bg-${status_color}-400 hover:shadow-lg transition duration-150 ease-in-out`}
                        >
                            {projectItem.fields.Status}
                        </button>
                    </div>
                    <div className='col-span-6'>
                    {projectItemTasks.map((projectItemTask) => {
                        return projectItem.id === projectItemTask.fields.associated_project_item_record_id_string ? (
                        <>
                            <ProjectItemTask key={projectItemTask.id} projectItemTask={projectItemTask} />
                        </>
                        ) : (
                            null
                        )
                    })}
                    </div>
                </div>
            </div>
            {/* <div class="">
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
            </div> */}
            </>
        )
            }

}

export default ProjectItem