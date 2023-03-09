import React from 'react';
import styled, {keyframes} from 'styled-components';


const CircleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  
  50% {
    transform: scale(2.5);
  }
  
  100% {
    transform: scale(1);
  }
`;




const Circle = styled.div`
  position: absolute;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.left}px`};
  border: 1px solid red;
  border-radius: 50%;
  animation: ${CircleAnimation} 200ms 1 linear;
  width: 15px;
  height: 15px;
  display: ${props => props.show ? 'block' : 'none'};
  z-index: 10;
`;



const ClickAnimation = (props) => {
    return <Circle {...props}/>
};

export default ClickAnimation;