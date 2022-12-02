import React, { useEffect, useState } from 'react'
import Airtable from 'airtable';
import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
  } from "@tremor/react";
import SpinnerComponent from '../Objects/Animations/SpinnerComponent';
import PromotionsTableRow from './PromotionsTableRow';

const base = new Airtable({ apiKey: 'keydxzcJdUXUCRGYy' }).base('appsc6BvDzAQRtjc2')

const Promotions = () => {
    const [promos, setPromos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(promos?.length > 0) {
            setLoading(false)
        }
    }, [promos])

    useEffect(() => {
        base("Promos")
            .select({ 
                view: "Fake Promos",
                //filterByFormula: `AND({client_from_new_client}='Made Up Lamps', {client_visible})`,
            })
            .eachPage((records, fetchNextPage) => {
                console.log(records)
                setPromos(records);
                fetchNextPage();
            });
    }, []);
    
    if (loading) {
        return <SpinnerComponent />;
    } else {
        return (
          <>
            <Card>
                <Table marginTop="mt-0">
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell><div className='text-center'>Status</div></TableHeaderCell>
                            <TableHeaderCell><div className='text-center'>Start Date</div></TableHeaderCell>
                            <TableHeaderCell><div className='text-center'>End Date</div></TableHeaderCell>
                            <TableHeaderCell><div className='text-center'>Type</div></TableHeaderCell>
                            <TableHeaderCell><div className='text-center'>Sitewide?</div></TableHeaderCell>
                            <TableHeaderCell><div className='text-center'>Promo ID</div></TableHeaderCell>
                            <TableHeaderCell><div className='text-center'>Promo Code</div></TableHeaderCell>
                            <TableHeaderCell><div className='text-center'>Desired Behavior</div></TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {promos.map((promo) => (
                            <PromotionsTableRow
                                key={promo.id}
                                promo={promo}
                            />
                        ))}
                    </TableBody>
                </Table>
            </Card>
          </>
        )
      }
}

export default Promotions;

{/* <TaskTableRow
    key={task.id}
    task={task}
/> */}