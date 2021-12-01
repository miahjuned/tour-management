import React, { useContext } from 'react';
import { userContext } from '../../../App';
import { SidebarContainer, SidebarDiv, SidebarBtn} from '../Dashboard CSS/Dashboard_CSS';
import SubMenu from './SubMenu';
import {SidebarData} from './Sidate_data';

const Sidebar = () => {
  
  const { user } = useContext(userContext);
    return (
      <SidebarContainer>
        <SidebarDiv>
          <SidebarBtn>Hello! {user.name}</SidebarBtn>
          {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
        </SidebarDiv>
      </SidebarContainer>
    );
};

export default Sidebar;