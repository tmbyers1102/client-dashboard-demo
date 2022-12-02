import React, { useEffect } from 'react'
import {
    TableRow,
    TableCell,
} from "@tremor/react";

const PromotionsTableRow = ({ promo }) => {

    var status_color = 'bg-red-300'
    {if (promo.fields.status == 'Live') {
        status_color = 'bg-green-300'
    } else if (promo.fields.status == 'Not Started') {
        status_color = 'bg-gray-300'
    } else {
        status_color = 'bg-blue-300'
    }}

    return (
        <>
            <TableRow>
                <TableCell>
                    <div className='flex justify-center'>
                        <button className={`flex ${status_color} px-3 py-1 text-xs rounded-full border border-full border-blue-600`}>
                            {promo.fields.status}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>

                        </button>
                    </div>
                </TableCell>
                <TableCell><div className='text-center'>{promo.fields.start_date}</div></TableCell>
                <TableCell><div className='text-center'>{promo.fields.end_date}</div></TableCell>
                <TableCell><div className='text-center'>{promo.fields.promo_type}</div></TableCell>
                <TableCell><div className='text-center'>{promo.fields.sitewide}</div></TableCell>
                <TableCell><div className='text-center'>{promo.fields.promotion_id}</div></TableCell>
                <TableCell><div className='text-center'>{promo.fields.promo_code}</div></TableCell>
                <TableCell><div className='text-center'>{promo.fields.ad_behavior}</div></TableCell>
            </TableRow>
        </>
    )
}

export default PromotionsTableRow;