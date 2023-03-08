import React from 'react';
import styled from "styled-components";

const UserImg = styled.img`
  width: ${props => props.width || '1rem'};
  height: auto;
  cursor: pointer;
`;

const User = (props) => {
    return (
        <UserImg src={'/src/assets/man_empty.png'} alt={'man-empty-img'} {...props}/>
    );
};

export default User;