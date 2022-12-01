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
            </Card>
        </>
    )

}

export default ProjectItemTask;