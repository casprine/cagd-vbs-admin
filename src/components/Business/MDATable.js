import React from 'react'
import { tableData } from '../../DummyData/context'
import TableRow from '../extra/TableRow'

export default function () {
    return (
        <table className="min-w-full leading-normal">
            <thead>
                <tr>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        MDA NAME
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        ROLE
                 </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        LAST UPDATED AT
                 </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        STATUS
                 </th>
                </tr>
            </thead>
            <tbody>
                {tableData.MDAs.map(mda => {
                    return (
                        <TableRow {...mda} />
                    )
                })}
            </tbody>
        </table>
    )
}