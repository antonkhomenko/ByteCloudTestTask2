import styled from "styled-components";
import UserList from "./UserList.jsx";
import Devices from "./Devices.jsx";
import React, {useContext, useEffect, useMemo, useRef, useState} from "react";
import {CountriesContext, CountriesDispatchContext} from "../contexts/CountriesContext.jsx";
import ClickAnimation from "./ClickAnimation.jsx";
import {NavigationContext, NavigationDispatchContext} from "../contexts/NavigationContext.jsx";
import {getSelectedCountries} from "../helpers/getSelectedCountries.js";
import StorageList from "./StorageList.jsx";
import Arcs from "./Arcs.jsx";
import Modal from "./Modal.jsx";

const MapWrapper = styled.div`
  min-width: 350px;
  max-width: 1200px;
  //width: min-content;
  margin: 0 auto;
  position: relative;
  //border: 5px solid green;
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




const WorldMap = ({resultTable}) => {


    const countries = useContext(CountriesContext);
    const countriesDispatch = useContext(CountriesDispatchContext);

    const step = useContext(NavigationContext);
    const setStep = useContext(NavigationDispatchContext);

    const [clickAnimation, setClickAnimation] = useState({show: false, top: '0px', left: '0px'});

    const selectedCountries = getSelectedCountries(countries);

    const [storageLocation, setStorageLocation] = useState(initValue);


    useEffect(() => {
        if(selectedCountries.length === countries.length) {
            setStep(2);
        }
    }, [selectedCountries.length])

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

    const [arcsData, setArcsData] = useState({});

   useEffect(() => {
       if(step === 6) {
           setArcsData({storage: storageLocation, countries: countries});
           setStep(7);
       }


   }, [step])

    const [finishedDevices, setFinishedDevices] = useState(0);





    useEffect(() => {

        if(finishedDevices === countries.length && step === 7) {
            setStep(8);
            setFinishedDevices(0);
        }
        if(finishedDevices === countries.length && step === 8) {
            setStep(9);
        }
    }, [finishedDevices, countries.length, step]);



    return (
        <>
            <ClickAnimation {...clickAnimation}/>
            <MapWrapper>
            <MapImg src={'/ByteCloudTestTask2/imgs/map.png'} alt={'map-img'}/>
            {
                countries.map((item, index) => {
                    return (
                        <LocationBlock key={item.name} {...item}>
                                {item.showDevices
                                    ? <Devices
                                        location={item.name} locationId={index}
                                        arcsData={arcsData} setCounter={setFinishedDevices}
                                        resultTable={resultTable}
                                        />
                                    : <UserList onClick={(event) => handleClick(index, event)}/>}
                        </LocationBlock>
                    )
                })
            }
            {
                step > 1 && <StorageList
                            setClickAnimation={setClickAnimation}
                            storageLocation={storageLocation}
                            setStorageLocation={setStorageLocation}
                />
            }

            {
                step >= 7 && <Arcs data={arcsData}/>
            }

            {
                step >= 9 && <Modal data={resultTable}/>
            }

        </MapWrapper></>
    );
};


export default WorldMap;

const initValue = [
    {top: 43, left: 28, name: 'NorthAmerica1', isSelected: false, objectStorage: false},
    {top: 43, left: 13, name: 'NorthAmerica2', isSelected: false, objectStorage: false},
    {top: 37, left: 48, name: 'Europe', isSelected: false, objectStorage: false},
    {top: 66, left: 75, name: 'Asia', isSelected: false, objectStorage: false},
];

