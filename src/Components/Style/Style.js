import tw from 'twin.macro';

// *************** SIdebar ********************
export const SidebarContainer = tw.div`md:w-1/6 md:h-screen h-full w-full bg-gray-900 overflow-y-scroll`;
export const SidebarDiv = tw.div`h-full md:fixed text-white overflow-y-scroll md:w-1/6`;
export const SidebarBtn = tw.button`bg-gray-500 hover:bg-red-700 focus:bg-blue-500 border-0 m-4 p-4 rounded-2xl`;

// **************** Table *****************
export const Table = tw.table`w-full font-medium md:mx-4 mt-20 tracking-tight`;
export const TableHeadData = tw.th`font-bold tracking-tight bg-gray-300 p-2 text-gray-800`;
export const TableBodyRow = tw.tr`border-gray-900 border bg-gray-200 hover:bg-gray-400 hover:shadow-lg`;
export const TableBodyData = tw.td`py-2 px-5`;

// Dashboard h2 title
export const DashboardContainer = tw.div`flex flex-wrap`;
export const DashboardTitle = tw.h2` text-red-600 py-2 border-l-4 pl-3 border-red-600`;