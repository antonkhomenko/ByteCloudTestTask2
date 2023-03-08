import React from 'react';
import User from "./User.jsx";
import styled from "styled-components";

const UserListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
`;


const UserList = () => {
    return (
        <UserListWrapper>
            <User/>
            <User width={'1.2rem'}/>
            <User width={'1.4rem'}/>
        </UserListWrapper>
    );
};

export default UserList;