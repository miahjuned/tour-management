import React from "react";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import img from '../../../img/depImg.jpg';
import { ActionButton, ActionContainer, TableBodyData, TableBodyRow, DashboardImg, DashboardImgContainer } from "../Dashboard CSS/Dashboard_CSS";

const TableSearch = ({ item, handleDelete, handleUpdate, handleShowComment }) => {
  return (
    <TableBodyRow>
      <TableBodyData> 
          <DashboardImgContainer>
              <DashboardImg src={item.img || img} alt={item.title} /> 
          </DashboardImgContainer>
      </TableBodyData>
      <TableBodyData> {item.title}</TableBodyData>
      <TableBodyData>{item.description.slice(0, 50) + '...'}</TableBodyData>
      <TableBodyData>{item.status}</TableBodyData>
      <TableBodyData>{item.user && item.user.name}</TableBodyData>
      <TableBodyData>{(new Date(item.date).toLocaleDateString())}</TableBodyData>

      <TableBodyData>
          <ActionContainer>
              <TableBodyData>{item.totalComment}</TableBodyData>
              <ActionButton
                  onClick={() => handleShowComment(item._id)} >
                  <AiFillEye />
              </ActionButton>
          </ActionContainer>
      </TableBodyData>
      <TableBodyData>{item.vote}</TableBodyData>

      <TableBodyData>
          <ActionContainer>
              <ActionButton
                  onClick={() => handleUpdate(item._id)} >
                  <AiFillEdit />
              </ActionButton>
              <ActionButton
                  onClick={() => handleDelete(item._id)} >
                  <AiFillDelete />
              </ActionButton>
          </ActionContainer>
      </TableBodyData>
    </TableBodyRow>
  );
};

export default TableSearch;
