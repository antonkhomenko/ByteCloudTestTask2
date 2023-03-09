import styled from "styled-components";
import UserList from "./UserList.jsx";
import Devices from "./Devices.jsx";
import React, {useContext, useState} from "react";
import {CountriesContext, CountriesDispatchContext} from "../contexts/CountriesContext.jsx";
import ClickAnimation from "./ClickAnimation.jsx";

const MapWrapper = styled.div`
  min-width: 350px;
  max-width: 1200px;
  //width: min-content;
  margin: 0 auto;
  position: relative;
  border: 5px solid green;
`;

const MapImg = styled.img`
  display: block;
  width: 100%;
`;

const LocationBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13%;
  height: 15%;
  border: 3px solid blue;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
`;


const WorldMap = () => {

    const countries = useContext(CountriesContext);
    const countriesDispatch = useContext(CountriesDispatchContext);
    const [clickAnimation, setClickAnimation] = useState({show: false, top: '0px', left: '0px'});


    const [usersAmount, setUserAmount] = useState(0);

    const handleClick = (targetIndex, event) => {
        countriesDispatch({
            type: 'showDevices',
            id: targetIndex,
        });

        setClickAnimation({
            show: true,
            top: event.pageY,
            left: event.pageX,
        });

        setTimeout(() => {
               setClickAnimation({})
        }, 200)
    }

    const handleUserAmount = (value) => {
        setUserAmount(value);
    }


    return (
        <>
            <ClickAnimation {...clickAnimation}/>
            <MapWrapper>
            <MapImg src={'/src/assets/map.png'} alt={'map-img'}/>
            {
                countries.map((item, index) => {
                    return (
                        <LocationBlock key={item.name} top={item.top} left={item.left}>
                            {item.showDevices ? <Devices/> : <UserList onClick={(event) => handleClick(index, event)}/>}
                        </LocationBlock>
                    )
                })
            }
        </MapWrapper></>
    );
};


export default WorldMap;