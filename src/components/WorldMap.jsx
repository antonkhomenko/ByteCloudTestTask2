import styled from "styled-components";
import UserList from "./UserList.jsx";
import Devices from "./Devices.jsx";
import React, {useContext, useEffect, useMemo, useState} from "react";
import {CountriesContext, CountriesDispatchContext} from "../contexts/CountriesContext.jsx";
import ClickAnimation from "./ClickAnimation.jsx";
import {NavigationDispatchContext} from "../contexts/NavigationContext.jsx";
import {getSelectedCountries} from "../helpers/getSelectedCountries.js";

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
  //width: 13%;
  //height: 15%;
  width: ${props => props.width || '13%'};
  height: ${props => props.height || '15%'};
  //border: 3px solid blue;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
`;

const StorageLocationBlock = styled.div`
  width: 5%;
  height: 8%;
  background: red;
  position: absolute;
  top: ${props => `${props.top}%`};
  left: ${props => `${props.left}%`};
`;

const StorageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
`;


const WorldMap = () => {


    const countries = useContext(CountriesContext);
    const countriesDispatch = useContext(CountriesDispatchContext);

    const setStep = useContext(NavigationDispatchContext);

    const [clickAnimation, setClickAnimation] = useState({show: false, top: '0px', left: '0px'});

    const selectedCountries = getSelectedCountries(countries);




    useEffect(() => {
        if(selectedCountries.length === countries.length) {
            setStep(2);
        }
    }, [selectedCountries])

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
        }, 200);

        return targetIndex;
    }



    return (
        <>
            <ClickAnimation {...clickAnimation}/>
            <MapWrapper>
            <MapImg src={'/src/assets/map.png'} alt={'map-img'}/>
            {
                countries.map((item, index) => {
                    return (
                        <LocationBlock key={item.name} {...item}>
                                {item.showDevices ? <Devices name={item.name} locationId={index}/> : <UserList onClick={(event) => handleClick(index, event)}/>}
                        </LocationBlock>
                    )
                })
            }
        </MapWrapper></>
    );
};


export default WorldMap;

const storageLocation = [
    {top: 20, left: 20, name: 'NorthAmerica'},
    {top: 20, left: 20, name: 'SouthAmerica'},
    {top: 20, left: 20, name: 'Europe'},
    {top: 20, left: 20, name: 'Asia'},
    {top: 20, left: 20, name: 'Australia'},
];

const getStorageLocationStyle = (name) => {
    return storageLocation.find(item => item.name === name);
}