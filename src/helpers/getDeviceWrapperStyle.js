
export const getDeviceWrapperStyle = (location, itemName, deviceAmount) => {

    let styledObj = {};

    switch(location) {
        case "NorthAmerica": {
            if(itemName === 'medium') {
                // styledObj.alignItems = 'flex-end';
                styledObj.alignSelf = 'end';
                styledObj.margin = deviceAmount < 3 ? '0 0 0 30%' : '0 0 0 0';
            }
            break;
        }
        case "SouthAmerica": {
            if(itemName === 'medium') {
                styledObj.order = '3';
                styledObj.margin = '0 5% 0 0';
            }
            else if(itemName === 'small') {
                styledObj.order = '2';
                styledObj.alignSelf = 'flex-end';
                styledObj.margin = deviceAmount < 3 ? '35% 25% 0 0' : '0 23% 10% 0';
            }
            else {
                styledObj.order = '1';
                styledObj.margin = '14% 45% 0 0';
            }
            break;
        }
        case "Europe": {
            if(itemName === "small") {
                styledObj.order = '2';
                // styledObj.alignItems = 'center';
                styledObj.alignSelf = 'center';
                styledObj.margin = deviceAmount < 3 ? '10% 35% 0 0' : '10% 0 0 15%';
            }
            else if(itemName === 'medium') {
                styledObj.order = '1';
                // styledObj.alignItems = 'flex-end';
                styledObj.alignSelf = 'end';
            }
            else {
                styledObj.order = '3';
                // styledObj.alignItems = 'flex-start';
                styledObj.alignSelf = 'start';
                styledObj.margin = '15% 5% 0 0';
            }
            break;
        }
        case "Asia": {
            if(itemName === 'small') {
                styledObj.order = '2';
                // styledObj.alignItems = 'center';
                styledObj.alignSelf = 'center';
                styledObj.margin = deviceAmount < 3 ? '10% 25% 0 0' : '15% 0 0 26%';
            }
            else if(itemName === 'medium') {
                styledObj.order = '1';
                // styledObj.alignItems = 'flex-end';
                styledObj.alignSelf = 'end';
                styledObj.margin = '0 0 0 5%';

            }
            else {
                styledObj.order = '3';
                // styledObj.alignItems = 'flex-start';
                styledObj.alignSelf = 'start';

            }
            break;
        }
        case "Australia": {
            if(itemName === 'small') {
                styledObj.order = '3';
                // styledObj.alignItems = 'flex-end';
                styledObj.alignSelf = 'end';
            }
            else if(itemName === 'medium') {
                styledObj.order = '1';
                // styledObj.alignItems = 'flex-end';
                styledObj.alignSelf = 'end';

            }
            else {
                styledObj.order = '2';
                // styledObj.alignItems = 'flex-end';
                styledObj.alignSelf = 'end';

            }
            break;
        }

    }

    return styledObj;
}