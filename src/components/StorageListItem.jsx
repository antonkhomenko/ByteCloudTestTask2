import React, {useContext, useEffect, useRef, useState} from 'react'
import styled from "styled-components";
import empty from '/src/assets/circle_empty.png';
import filled from '/src/assets/circle_filled.png';
import server from '/src/assets/server.png';
import serverBC from '/src/assets/server_ByteCloud.png';

import {NavigationContext, NavigationDispatchContext} from "../contexts/NavigationContext.jsx";

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

const StorageImg = styled.img`
  width: auto;
  height: 100%;
  cursor: pointer;
`;





const StorageListItem = ({storageItem, setStorage}) => {

    const [storageState, setStorageState] = useState(empty);
    const step = useContext(NavigationContext);
    const setStep = useContext(NavigationDispatchContext);


    const mouseEnter = () => {
        if(storageState === server || storageState === serverBC) return;
        setStorageState(filled);
    }

    const mouseLeave = () => {
        if(storageState === server || storageState === serverBC) return;
        setStorageState(empty);
    }

    const handleClick = () => {
        setStep(3);
        setStorage(prev => prev.map(item => {
            if(item.name === storageItem.name) {
                return {...item, isSelected: true};
            }
            return {...item};
        }))
        if(step === 2) {
            setStorageState(server);
        } else {
            setStorageState(serverBC);
        }

    }






    return (
        <Wrapper top={storageItem.top} left={storageItem.left}>
            <StorageImg
                src={storageState} alt={'loader-img'}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                onClick={handleClick}
            />
        </Wrapper>
    );
};

export default StorageListItem;

