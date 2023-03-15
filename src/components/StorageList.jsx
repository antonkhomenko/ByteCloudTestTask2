import React, {useContext, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import StorageListItem from "./StorageListItem.jsx";
import {NavigationContext, NavigationDispatchContext} from "../contexts/NavigationContext.jsx";

const getSelectedStorage = (storage) => {
    return storage.filter(item => item.isSelected === true);
}




const StorageList = ({setClickAnimation, setStorageLocation, storageLocation}) => {

    const setStep = useContext(NavigationDispatchContext);
    const step = useContext(NavigationContext);

    const selectedLocationAmount = getSelectedStorage(storageLocation).length;


    useEffect(() => {

        if(step === 3 && selectedLocationAmount === 3) {
            setStep(4);
        }
        if(step === 4 && selectedLocationAmount === 4) {
            setStep(5)
        }
        if(step === 5) {
            const newStorageLocation = storageLocation.filter(item => item.isSelected === true);
            setStorageLocation(newStorageLocation);
            setStep(6);
        }
    }, [selectedLocationAmount, step]);




    return (
       <div>
           {
               storageLocation.map(item => (
                   <StorageListItem
                       storageItem={item}
                       storage={storageLocation}
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

