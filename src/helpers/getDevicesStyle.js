

export const getDevicesStyle = (name) => {
    const wrapperStyle = {};

    switch (name) {
        case "NorthAmerica": {
            wrapperStyle.flexDirection = 'row-reverse';
            wrapperStyle.justifyContent = 'center';
            wrapperStyle.gap = '7%';
            break;
        }
        case "SouthAmerica": {
            wrapperStyle.flexDirection = 'column';
            break;
        }
        case "Europe": {
            wrapperStyle.flexDirection = 'row';
            break;
        }
        case "Asia": {
            wrapperStyle.flexDirection = 'row';
            break;
        }
        case "Australia": {
            wrapperStyle.flexDirection = 'row';
            break;
        }
    }

    return wrapperStyle;
}