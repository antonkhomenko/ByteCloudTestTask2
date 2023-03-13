
export const getDeviceWrapperStyle = (locationId, itemName, deviceAmount) => {

    let styledObj = {};

    switch(locationId) {
        case 0: {
            if(itemName === 'medium') {
                // styledObj.alignItems = 'flex-end';
                styledObj.alignSelf = 'end';
            }
            break;
        }
        case 1: {
            if(itemName === 'medium') {
                styledObj.order = '3';
            }
            else if(itemName === 'small') {
                styledObj.order = '2';
                styledObj.alignSelf = 'flex-end';
                styledObj.margin = deviceAmount < 3 ? '25% 25% 0 0' : '0 15% 0 0';
            }
            else {
                styledObj.order = '1';
                styledObj.margin = '0 45% 0 0';
            }
            break;
        }
        case 2: {
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
                styledObj.margin = '15% 0 0 0';
            }
            break;
        }
        case 3: {
            if(itemName === 'small') {
                styledObj.order = '2';
                // styledObj.alignItems = 'center';
                styledObj.alignSelf = 'center';
                styledObj.margin = deviceAmount < 3 ? '0 25% 0 0' : '15% 0 0 30%';
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

            }
            break;
        }
        case 4: {
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