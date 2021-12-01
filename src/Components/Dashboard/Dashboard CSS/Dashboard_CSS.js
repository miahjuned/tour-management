import tw from 'twin.macro';

// *************** Dashboard Sidebar ********************
export const SidebarContainer = tw.div`md:w-1/6 md:h-screen h-full w-full bg-gray-900 overflow-y-scroll`;
export const SidebarDiv = tw.div`h-full w-full text-white overflow-y-scroll `;
export const SidebarBtn = tw.h2`bg-red-600 hover:bg-red-800 font-bold text-center m-4 p-4 rounded-2xl w-10/12`;
export const DashboardLink = tw.div` flex  text-white font-medium justify-between  items-center py-4 px-5 focus:bg-red-600 tracking-tight text-lg  hover:bg-red-600 hover:border-l-4 cursor-pointer`;
export const DashboardLinkIcon = tw.div`flex items-center space-x-3`;

// *************** Dashboard ********************

export const DashboardMain = tw.div`flex flex-wrap`;
export const DashboardContainer = tw.div`md:w-5/6 w-full h-screen overflow-y-scroll bg-gray-200`;

export const DashboardTitle = tw.h2` text-white py-2 border-l-4 pl-3 border-red-600`;
export const DashboardImgContainer = tw.div`h-20 w-20 rounded-full`;
export const DashboardImg = tw.img`h-full w-full rounded-full`;

export const Table = tw.table`w-full font-medium mt-10 tracking-tight`;
export const TableHeadData = tw.th`font-bold tracking-tight bg-gray-300 p-2 text-gray-800`;
export const TableBodyRow = tw.tr`border-gray-300 border bg-gray-200 hover:bg-gray-400 hover:shadow-lg`;
export const TableBodyData = tw.td`py-2 px-5 border-r  border-gray-300`;
export const TableSearch = tw.div`flex justify-between sticky top-0`;



export const ActionContainer = tw.div`flex items-center text-2xl`;
export const ActionButton = tw.button`text-red-600 p-1 hover:bg-gray-900 rounded-full hover:text-gray-50`;
export const NotFound = tw.p`text-red-600 p-4 flex items-center justify-center`;


export const SearchForm = tw.form`flex items-center`;
export const SearchInput = tw.input`ml-2 rounded-l-full w-full h-7  pl-2 sm:px-5 text-gray-900 leading-tight outline-none border-none`;
export const SearchInputBtn = tw.button`text-2xl m-0 font-semibold  sm:mr-2 cursor-pointer text-white rounded-r-2xl focus:outline-none w-16 flex items-center justify-center  bg-red-600 hover:bg-red-800  h-7`;

