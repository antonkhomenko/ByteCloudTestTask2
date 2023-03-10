import React from 'react';
import styled from "styled-components";
import large from "../assets/large.png";

const DeviceImg = styled.img`
    width: 100%;
    height: auto;
`;

const Wrapper = styled.div`
  max-width: 33%;
  height: auto;
  display: flex;
  align-items: flex-end;
  position: relative;
`;

const Mask = styled.div`
  position: absolute;
  width: 37%;
  height: 23%;
  background-color: black;
  top: 28%;
  left: 33%;
  border-radius: 3px;
`;

const Device3 = () => {
    return (
        <Wrapper>
            <Mask/>
            <DeviceImg src={large} alt={'large-device'}/>
        </Wrapper>
    );
};

export default Device3;