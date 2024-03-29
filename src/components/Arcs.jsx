import styled from "styled-components";
import ArcItem from "./ArcItem.jsx";
import arc1 from '/public/arcs/arc_east-usa_asia_large.png';
import {getClosestServer} from "../helpers/getClosestServer.js";
import {useContext} from "react";
import {NavigationContext} from "../contexts/NavigationContext.jsx";


const getArcImgName = (storageItem, countryItem, sizeItem) => {
    let storage, country, size;

    switch (storageItem.name) {
        case 'NorthAmerica1':
            storage = 'east-usa';
            break;
        case 'NorthAmerica2':
            storage = 'west-usa';
            break;
        case 'Europe':
            storage = 'germany';
            break;
        case 'Asia':
            storage = 'singapore';
            break;
    }

    switch(countryItem.name) {
        case 'NorthAmerica':
            country = 'north-america';
            break;
        case 'SouthAmerica':
            country = 'south-america';
            break;
        case 'Europe':
            country = 'europe';
            break;
        case 'Asia':
            country = 'asia';
            break;
        case 'Australia':
            country = 'oceania';
            break;
    }

    switch (sizeItem) {
        case 1:
            size = 'small';
            break;
        case 2:
            size = 'medium';
            break;
        case 3:
            size = 'large';
            break;
    }


    return `arc_${storage}_${country}_${size}.png`;
}


const getArcsImgs = (data, step) => {

    let path = '/ByteCloudTestTask2/arcs/';

    const countries = data.countries;
    const storage = data.storage;


    let result = [];

    if(step === 7) {
        const closestServers = getClosestServer(storage, countries);

        closestServers.forEach(item => {
            for(let i = 1; i <= item[0].selectedUsers; i++) {
                result.push(path + getArcImgName(item[1], item[0], i));
            }
        });
    }
    if(step === 8){


        const objectStorage =  storage.find(item => item.objectStorage === true);


        for (let i = 0; i < countries.length; i++) {
            for(let s = 1; s <= countries[i].selectedUsers; s++) {
                result.push(path + getArcImgName(objectStorage, countries[i], s));
            }
        }
    }



    return result;
}






const Arcs = ({data}) => {

    const step = useContext(NavigationContext);
    const arcsImgs = getArcsImgs(data, step);




    return (
       <>
           {
               arcsImgs.map(item => <ArcItem src={item} key={item}/>)
           }
       </>
    );
};

export default Arcs;