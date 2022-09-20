import React from 'react';
import BasicTable from './basic/BasicTable';
import ColumnHiding from './columnHiding/ColumnHiding';
import ColumnOrder from './columnOrder/ColumnOrder';
import FilteringTable from './filtering/FilteringTable';
import PaginationTable from './pagination/PaginationTable';
import RowSelection from './rowSelection/RowSelection';
import SortingTable from './sorting/SortingTable';
import StickyTable from './sticky/StickyTable';

const Table = () => {
    return (
        <div>
            {/* <BasicTable /> */}
            {/* <SortingTable /> */}
            {/* <FilteringTable /> */}
            {/* <PaginationTable /> */}
            {/* <RowSelection /> */}
            {/* <ColumnOrder /> */}
            {/* <ColumnHiding /> */}
            <StickyTable />
            
        </div>
    );
};

export default Table;