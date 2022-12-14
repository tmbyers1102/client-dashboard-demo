import React, { useEffect, useState } from 'react';

import {
    Block,
    Card,
    Tab,
    TabList,
    Title,
    Dropdown,
    DropdownItem
  } from '@tremor/react';
import Update from './Updates/Update';
import TaskTable from './Tasks/TaskTable';
import Projects from './Projects/Projects';
import Questions from './Questions/Questions';
import Videos from './Videos/Videos';
import Promotions from './Promotions/Promotions';
import Docs from './Docs/Docs';

function Tabs() {
    const [selectedView, setSelectedView] = useState(1);
    
    return (
        <main className='py-2 md:py-3 px-6'>
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-amber-500 animate-wiggle">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                    <Title>Made Up Lamps</Title>
                </div>
                <div className='md:hidden'>
                    <Dropdown
                        placeholder="Select..."
                        defaultValue={ 1 }
                        handleSelect={ (value) => setSelectedView(value) }
                        maxWidth="max-w-none"
                        marginTop="mt-0"
                    >
                        <DropdownItem value={ 1 } text="Updates" icon="" />
                        <DropdownItem value={ 2 } text="Tasks" icon="" />
                        <DropdownItem value={ 3 } text="Projects" icon="" />
                        <DropdownItem value={ 4 } text="Questions" icon="" />
                        <DropdownItem value={ 5 } text="Videos" icon="" />
                        <DropdownItem value={ 6 } text="Docs" icon="" />
                        <DropdownItem value={ 7 } text="Promotions" icon="" />
                    </Dropdown>
                </div>
                <div className='hidden md:block'>
                    <TabList defaultValue={ 1 } handleSelect={ (value) => setSelectedView(value) } marginTop="mt-3">
                        <Tab value={ 1 } text="Updates" />
                        <Tab value={ 2 } text="Tasks" />
                        <Tab value={ 3 } text="Projects" />
                        <Tab value={ 4 } text="Questions" />
                        <Tab value={ 5 } text="Videos" />
                        <Tab value={ 6 } text="Docs" />
                        <Tab value={ 7 } text="Promotions" />
                    </TabList>
                </div>
            </div>

            { selectedView === 1 ? (
                <Block marginTop="mt-3">
                    <Update />
                </Block>
            ) : selectedView === 2 ? (
                <Block marginTop="mt-3">
                      <TaskTable />
                </Block>
            ) : selectedView === 3 ? (
                <Block marginTop="mt-3">
                    <Card>
                        <Projects />
                    </Card>
                </Block>
            ) : selectedView === 4 ? (
                <Block marginTop="mt-3">
                    <Card>
                        <Questions />
                    </Card>
                </Block>
            ) : selectedView === 5 ? (
                <Block marginTop="mt-3">
                    <Card>
                        <Videos />
                    </Card>
                </Block>
            ) : selectedView === 6 ? (
                <Block marginTop="mt-3">
                    <Card>
                        <Docs />
                    </Card>
                </Block>
            ) : (
                <Block marginTop="mt-3">
                    <Promotions />
                </Block>
            ) }
        </main>
    );
}

export default Tabs;