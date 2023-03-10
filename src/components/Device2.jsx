import React from 'react';
import styled from "styled-components";
import medium from '/src/assets/medium.png';


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
  width: 52%;
  height: 72%;
  background-color: black;
  top: 14%;
  left: 24%;
`;

const Device2 = () => {
    return (
        <Wrapper>
            <Mask>

            </Mask>
            <DeviceImg src={medium} alt={'medium-device'}/>
        </Wrapper>
    );
};

export default Device2;