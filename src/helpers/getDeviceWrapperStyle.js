
export const getDeviceWrapperStyle = (locationId, itemName) => {

    let styledObj = {};

    switch(locationId) {
        case 0: {
            if(itemName === 'medium') {
                styledObj.alignItems = 'flex-end';
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
            }
            else {
                styledObj.order = '1';
            }
            break;
        }
        case 2: {
            if(itemName === "small") {
                styledObj.order = '2';
                styledObj.alignItems = 'center';
            }
            else if(itemName === 'medium') {
                styledObj.order = '1';
                styledObj.alignItems = 'flex-end';
            }
            else {
                styledObj.order = '3';
                styledObj.alignItems = 'flex-start';
            }
            break;
        }
        case 3: {
            if(itemName === 'small') {
                styledObj.order = '2';
                styledObj.alignItems = 'center';
            }
            else if(itemName === 'medium') {
                styledObj.order = '1';
                styledObj.alignItems = 'flex-end';
            }
            else {
                styledObj.order = '3';
                styledObj.alignItems = 'flex-start';
            }
            break;
        }
        case 4: {
            if(itemName === 'small') {
                styledObj.order = '3';
                styledObj.alignItems = 'flex-end';
            }
            else if(itemName === 'medium') {
                styledObj.order = '1';
                styledObj.alignItems = 'flex-end';
            }
            else {
                styledObj.order = '2';
                styledObj.alignItems = 'flex-end';
            }
            break;
        }

    }

    return styledObj;
}