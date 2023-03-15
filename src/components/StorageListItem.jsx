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
  z-index: 3;
`;

const StorageImg = styled.img`
  width: auto;
  height: 100%;
  cursor: pointer;
`;




const StorageListItem = ({storageItem, setStorage, setClickAnimation, storage}) => {

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

    const handleClick = (event) => {
        if(storageState === empty || storageState === filled) {
            setClickAnimation({
                show: true,
                top: event.pageY,
                left: event.pageX,
            });

            setTimeout(() => {
                setClickAnimation({})
            }, 200);

            setStorage(prev => prev.map(item => {
                if(item.name === storageItem.name) {
                    return {...item, isSelected: true};
                }
                return {...item};
            }));


            if(step === 2) {
                setStorageState(server);
                setStorage(storage.map(item => {
                    if(item.name === storageItem.name) {
                        return {...item, isSelected: true ,objectStorage: true};
                    }
                    return item;
                }))
                setStep(3);
            }
            else if(step === 3 || step === 4) {
                setStorageState(serverBC);
            }

        }

    }






    return (
        <Wrapper top={storageItem.top} left={storageItem.left}>
            <StorageImg
                src={storageState} alt={'loader-img'}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                onClick={e => handleClick(e)}
            />
        </Wrapper>
    );
};

export default StorageListItem;

