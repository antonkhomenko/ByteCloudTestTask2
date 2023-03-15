import React, {useContext, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import StorageListItem from "./StorageListItem.jsx";
import {NavigationContext, NavigationDispatchContext} from "../contexts/NavigationContext.jsx";

const getSelectedStorage = (storage) => {
    return storage.filter(item => item.isSelected === true);
}




const StorageList = ({setClickAnimation}) => {

    const [storageLocation, setStorageLocation] = useState(initValue);
    const setStep = useContext(NavigationDispatchContext);
    const step = useContext(NavigationContext);

    const selectedLocationAmount = getSelectedStorage(storageLocation).length;



    useEffect(() => {
        if(selectedLocationAmount === 4) {
            setStep(5);
        }
        if(step === 3 && selectedLocationAmount === 3) {
            setStep(4);
        }
        if(step === 5) {
            const newStorageLocation = storageLocation.filter(item => item.isSelected === true);
            setStorageLocation(newStorageLocation);
        }
    }, [selectedLocationAmount, step]);



    return (
       <div>
           {
               storageLocation.map(item => (
                   <StorageListItem
                       storageItem={item}
                       setStorage={setStorageLocation}
                       setClickAnimation={setClickAnimation}
                       key={item.name}
                   />
               ))
           }
       </div>
    );
};

export default StorageList;

const initValue = [
    {top: 40, left: 29, name: 'NorthAmerica1', isSelected: false},
    {top: 40, left: 12, name: 'NorthAmerica2', isSelected: false},
    {top: 37, left: 48, name: 'Europe', isSelected: false},
    {top: 66, left: 75, name: 'Asia', isSelected: false},
];