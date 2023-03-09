import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1200px;
  min-width: 375px;
  width: 100%;
  padding: 10px 5px;
  margin: 0 auto;
  margin-top: 2%;
  gap: 10px;
  background-color: #fff;
  display: flex;
  
`;


const Navigation = ({title}) => {
    return (
        <Wrapper>
            <p>{title}</p>
            <button>Next</button>
        </Wrapper>
    );
};

export default Navigation;