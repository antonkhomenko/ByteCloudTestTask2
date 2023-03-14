import React from 'react';
import styled from "styled-components";
import StorageListItem from "./StorageListItem.jsx";




const StorageList = () => {
    return (
       <div>
           {
               storageLocation.map(item => <StorageListItem {...item} key={item.name}/>)
           }
       </div>
    );
};

export default StorageList;

const storageLocation = [
    {top: 40, left: 29, name: 'NorthAmerica1'},
    {top: 40, left: 12, name: 'NorthAmerica2'},
    {top: 37, left: 48, name: 'Europe'},
    {top: 66, left: 75, name: 'Asia'},
];