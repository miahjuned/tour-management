import React from 'react';
import { ImSearch } from 'react-icons/im';
import { DashboardTitle, SearchForm, SearchInput, SearchInputBtn, TableSearch } from '../Dashboard CSS/Dashboard_CSS';


const TableSearchFrom = ({filterData}) => {
    return (
        <TableSearch style={{ background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>
            <DashboardTitle >
                All features
            </DashboardTitle>
            <SearchForm>
                <SearchInput
                    onChange={filterData}
                    type="text"
                    placeholder="Search"
                />

                <SearchInputBtn type="submit" >
                    <ImSearch className="h-4" />
                </SearchInputBtn>
            </SearchForm>
        </TableSearch>
    );
};

export default TableSearchFrom;