import React, {useId} from 'react';
import styled from "styled-components";

const UserImg = styled.img`
  width: ${props => props.width || '1rem'};
  height: auto;
  cursor: pointer;
`;

const User = ({width, src, onMouseEnter, onMouseLeave}) => {


    return (
        <UserImg src={src} alt={'man-empty-img'} width={width} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
    );
};

export default User;