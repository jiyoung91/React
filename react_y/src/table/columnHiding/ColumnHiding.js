import React , { useMemo } from 'react';
import { useTable } from 'react-table'
import { Checkbox } from '../rowSelection/CheckBox';

import MOCK_DATA from '../basic/MOCK_DATA.json'
import { COLUMNS } from '../basic/columns'
import '../basic/table.css'

const ColumnHiding = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const { 
        getTableProps, 
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        allColumns,
        getToggleHideAllColumnsProps
    } = useTable({
            columns,
            data
        })

    return (
        <>
        <div>
            <div>
                <Checkbox {...getToggleHideAllColumnsProps()}/>Toggle All
            </div>
            {
                allColumns.map(column =>(
                    <div key={column.id}>
                        <label>
                            <input type='checkbox' {...column.getToggleHiddenProps()} />
                            {column.Header }
                        </label>
                    </div>
                ))
            }
        </div>
        <table { ...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup)=>(
                    <tr { ...headerGroups.getHeaderGroupProps}>
                        {
                            headerGroup.headers.map( (column) =>(
                                <th { ...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))
                        }
                    </tr>
                    ))
                }
            </thead>
            <tbody { ...getTableBodyProps()}>
                {
                    rows.map( row =>{
                        prepareRow(row)
                        return(
                            <tr { ...row.getRowProps()}>
                                {
                                   row.cells.map((cell)=>{
                                    return  <td { ...cell.getCellProps()}>
                                        {cell.render('Cell')}</td>
                                   })
                                }
                            </tr>
                        )
                    })
                }
            </tbody> 
        </table>
        </>
    );
};

export default ColumnHiding;