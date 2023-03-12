

export const getDevicesStyle = (locationId) => {
    const wrapperStyle = {};

    switch (locationId) {
        case 0: {
            wrapperStyle.flexDirection = 'row-reverse';
            break;
        }
        case 1: {
            wrapperStyle.flexDirection = 'column';
            break;
        }
        case 2: {
            wrapperStyle.flexDirection = 'row';
            break;
        }
        case 3: {
            wrapperStyle.flexDirection = 'row';
            break;
        }
        case 4: {
            wrapperStyle.flexDirection = 'row';
            break;
        }
    }

    return wrapperStyle;
}