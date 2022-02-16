

import React, {useMemo} from 'react'
import {useTable} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './column'


export const BasicTable = (props) => {
    const getdata = props.sendData;
    const columns = useMemo(() => COLUMNS,[] )
    const data = useMemo(() => MOCK_DATA,[] )

    const tableInstnce = useTable({
        columns,
        data: getdata
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstnce

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                        <tr key={1} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th key={1} {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                        </tr>   
                    ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr key={1} {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                                return <td key={1} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
            </tr>
                    )
                })}
            
            </tbody>
        </table>
    )
}