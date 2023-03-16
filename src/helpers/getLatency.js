
export const getLatency = (countryName, storageName) => {
    let latency;
    switch (storageName) {
        case "NorthAmerica1": {
            switch (countryName) {
                case 'NorthAmerica':
                    latency = 48.1;
                    break;
                case 'SouthAmerica':
                    latency = 139.5;
                    break;
                case 'Europe':
                    latency = 97.7;
                    break;
                case 'Asia':
                    latency = 232.9;
                    break;
                case 'Australia':
                    latency = 207.8;
                    break;
            }
            return latency;
        }

        case "NorthAmerica2": {
            switch (countryName) {
                case 'NorthAmerica':
                    latency = 32.7;
                    break;
                case 'SouthAmerica':
                    latency = 181.7;
                    break;
                case 'Europe':
                    latency = 170.2;
                    break;
                case 'Asia':
                    latency = 143.4;
                    break;
                case 'Australia':
                    latency = 179.4;
                    break;
            }
            return latency;
        }

        case "Europe": {
            switch (countryName) {
                case 'NorthAmerica':
                    latency = 122.7;
                    break;
                case 'SouthAmerica':
                    latency = 174.7;
                    break;
                case 'Europe':
                    latency = 19.7;
                    break;
                case 'Asia':
                    latency = 296.2;
                    break;
                case 'Australia':
                    latency = 255.3;
                    break;
            }
            return latency;
        }

        case "Asia": {
            switch (countryName) {
                case 'NorthAmerica':
                    latency = 204.4;
                    break;
                case 'SouthAmerica':
                    latency = 367.7;
                    break;
                case 'Europe':
                    latency = 182.0;
                    break;
                case 'Asia':
                    latency = 70.6;
                    break;
                case 'Australia':
                    latency = 92.4;
                    break;
            }
            return latency;
        }
    }
}