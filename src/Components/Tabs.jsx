import React from 'react';
import { Card, Text, Metric } from "@tremor/react";

function Tabs() {
    return (
        <>
            <Card maxWidth="max-w-sm">
                <Text>Sales</Text>
                <Metric>$ 71,465</Metric>
            </Card>
        </>
        )
}

export default Tabs;