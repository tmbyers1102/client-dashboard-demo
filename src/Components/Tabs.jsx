import React, { useEffect, useState } from 'react';
import {
    Block,
    Card,
    Tab,
    TabList,
    Title,
  } from '@tremor/react';
import Update from './Updates/Update';
import TaskTable from './Tasks/TaskTable';
import Projects from './Projects/Projects';
import Questions from './Questions/Questions';
import Videos from './Videos/Videos';
import Promotions from './Promotions/Promotions';

function Tabs() {
    const [selectedView, setSelectedView] = useState(1);
    
    return (
        <main className='p-6'>
            <Title>Made Up Lamps</Title>
            <TabList defaultValue={ 1 } handleSelect={ (value) => setSelectedView(value) } marginTop="mt-6">
                <Tab value={ 1 } text="Updates" />
                <Tab value={ 2 } text="Tasks" />
                <Tab value={ 3 } text="Projects" />
                <Tab value={ 4 } text="Questions" />
                <Tab value={ 5 } text="Videos" />
                <Tab value={ 6 } text="Promotions" />
            </TabList>

            { selectedView === 1 ? (
                <Block marginTop="mt-6">
                    <Update />
                </Block>
            ) : selectedView === 2 ? (
                <Block marginTop="mt-6">
                      <TaskTable />
                </Block>
            ) : selectedView === 3 ? (
                <Block marginTop="mt-6">
                    <Card>
                        <Projects />
                    </Card>
                </Block>
            ) : selectedView === 4 ? (
                <Block marginTop="mt-6">
                    <Card>
                        <Questions />
                    </Card>
                </Block>
            ) : selectedView === 5 ? (
                <Block marginTop="mt-6">
                    <Card>
                        <Videos />
                    </Card>
                </Block>
            ) : (
                <Block marginTop="mt-6">
                    <Promotions />
                </Block>
            ) }
        </main>
    );
}

export default Tabs;