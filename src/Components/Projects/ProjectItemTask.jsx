import React, { useEffect, useState } from 'react'
import {
    Badge,
    Flex,
    Card,
    Text,
    List,
    ListItem,
    Subtitle,
    ColGrid,
    Col,
} from "@tremor/react";

const ProjectItemTask = ({ projectItemTask }) => {
    var status_color = []
    {if (projectItemTask.fields.Status == 'Done') {
        status_color = 'emerald'
    } else if (projectItemTask.fields.Status == 'In progress') {
        status_color = 'sky'
    } else if (projectItemTask.fields.Status == 'Client Hold') {
        status_color = 'slate'
    } else {
        status_color = 'rose'
    }}
    
    return (
        <>
            <Card maxWidth="max-w-full" marginTop="mt-6" decoration="right" decorationColor="slate" class="bg-red-300">
                <ColGrid>
                    <Flex
                        justifyContent="justify-between"
                        alignItems="items-center"
                        spaceX="space-x-3"
                        truncate={false}
                        marginTop="mt-0"
                    >
                        <Col>
                            <p class="text-sm">{projectItemTask.fields.Name}</p>
                        </Col>
                        <Col>
                            <Badge text={projectItemTask.fields.Status} color={status_color}/>
                            <button className='bg-teal-300 px-2 py-1 text-xs rounded-full'>
                                {projectItemTask.fields.Status}
                            </button>
                        </Col>
                    </Flex>
                </ColGrid>
                <List marginTop="mt-2">
                    <ListItem spaceX="space-x-0">
                        <Subtitle>Scheduled Work Date:</Subtitle>
                        <Text>
                            {projectItemTask.fields.due_date}
                        </Text>
                    </ListItem>
                </List>
                <div class="">
                    <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalXl">Extra large modal</button>
                </div>
                <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalXl" tabindex="-1" aria-labelledby="exampleModalXlLabel" aria-modal="true" role="dialog">
                    <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
                        <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalXlLabel">
                            Extra large modal
                            </h5>
                            <button type="button"
                            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body relative p-4">
                            ...
                        </div>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )

}

export default ProjectItemTask;