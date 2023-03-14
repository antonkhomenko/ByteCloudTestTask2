import React, {useState} from 'react'
import styled from "styled-components";
import empty from '/src/assets/circle_empty.png';
import filled from '/src/assets/circle_filled.png';

const Wrapper = styled.div`
  width: 4%;
  height: 6%;
  top: ${props => `${props.top}%`};
  left: ${props => `${props.left}%`};
  //background-color: red;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StorageLoader = styled.img`
  width: auto;
  height: 100%;
  cursor: pointer;
`;

const StorageListItem = (props) => {

    const [circleState, setCircleState] = useState(empty);


    const mouseEnter = () => {
        setCircleState(filled);
    }

    const mouseLeave = () => {
        setCircleState(empty);
    }

    return (
        <Wrapper {...props}>
            <StorageLoader
                src={circleState} alt={'loader-img'}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
            />
        </Wrapper>
    );
};

export default StorageListItem;