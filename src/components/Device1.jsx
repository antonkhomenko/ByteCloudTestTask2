import React from 'react';
import styled from "styled-components";
import laptop from '/src/assets/small.png'


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
  width: 80%;
  height: 48%;
  background-color: black;
  top: 22%;
  left: 10%;
`;



const Device1 = () => {
    return (
        <Wrapper>
            <Mask/>
            <DeviceImg src={laptop} alt={'small-device'}/>
        </Wrapper>
    );
};

export default Device1;