import small from '/src/assets/small.png';
import medium from '/src/assets/medium.png';
import large from '/src/assets/large.png';

const initValue = [
    {src: small, name: 'small', mask: {width: 80, height: 50, top : 20, left: 10}},
    {src: medium, name: 'medium', mask: {width: 51, height: 72, top: 14, left: 25}},
    {src: large, name: 'large', mask: {width: 35, height: 21, top: 29, left: 34}},
];



export const getDeviceList = (locationId, devicesAmount) => {
    const filteredDevicesList = initValue.filter((item, index) => index + 1 <= devicesAmount);



    return filteredDevicesList;
}