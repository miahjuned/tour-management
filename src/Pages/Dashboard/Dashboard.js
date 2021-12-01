import React from 'react';
import { DashboardContainer, DashboardMain } from '../../Components/Dashboard/Dashboard CSS/Dashboard_CSS';
import Sidebar from '../../Components/Dashboard/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <DashboardMain>
            <Sidebar/>
            <DashboardContainer>
            Dashboard

            </DashboardContainer>
        </DashboardMain>
    );
};

export default Dashboard;