



export const getClosestServer = (storage,  country) => {

    const storagesNames = storage.map(item => item.name);

    let storageRes = [];
    
    for(let i = 0; i < country.length; i++) {
        switch (country[i].name) {
            case 'NorthAmerica': {
                if (storagesNames.includes('NorthAmerica1')) {
                    const closesStorage = storage.find(item => item.name === 'NorthAmerica1');
                    storageRes.push([country[i], closesStorage]);
                    break;
                } else if (storagesNames.includes('NorthAmerica2')) {
                    const closesStorage = storage.find(item => item.name === 'NorthAmerica2');
                    storageRes.push([country[i], closesStorage]);
                    break;
                } else if (storagesNames.includes('Europe')) {
                    const closesStorage = storage.find(item => item.name === 'Europe');
                    storageRes.push([country[i], closesStorage]);
                    break;
                } else {
                    const closesStorage = storage.find(item => item.name === 'Asia');
                    storageRes.push([country[i], closesStorage]);
                    break;
                }
            }
            case 'SouthAmerica': {
                if (storagesNames.includes('NorthAmerica2')) {
                    const closesStorage = storage.find(item => item.name === 'NorthAmerica2');
                    storageRes.push([country[i], closesStorage]);
                    break;
                } else if (storagesNames.includes('NorthAmerica1')) {
                    const closesStorage = storage.find(item => item.name === 'NorthAmerica1');
                    storageRes.push([country[i], closesStorage]);
                    break;
                } else if (storagesNames.includes('Europe')) {
                    const closesStorage = storage.find(item => item.name === 'Europe');
                    storageRes.push([country[i], closesStorage]);
                    break;
                } else {
                    const closesStorage = storage.find(item => item.name === 'Asia');
                    storageRes.push([country[i], closesStorage]);
                    break;
                }
            }
            case 'Europe': {
                if (storagesNames.includes('Europe')) {
                    const closesStorage = storage.find(item => item.name === 'Europe');
                    storageRes.push([country[i], closesStorage]);
                    break;
                } else if (storagesNames.includes('NorthAmerica1')) {
                    const closesStorage = storage.find(item => item.name === 'NorthAmerica1');
                    storageRes.push([country[i], closesStorage]);
                    break;
                } else if (storagesNames.includes('NorthAmerica2')) {
                    const closesStorage = storage.find(item => item.name === 'NorthAmerica2');
                    storageRes.push([country[i], closesStorage]);
                    break;
                } else {
                    const closesStorage = storage.find(item => item.name === 'Asia');
                    storageRes.push([country[i], closesStorage]);
                    break;
                }
            }
            case 'Asia': {
                if (storagesNames.includes('Asia')) {
                    const closesStorage = storage.find(item => item.name === 'Asia');
                    storageRes.push([country[i], closesStorage]);
                    break;
                } else if (storagesNames.includes('Europe')) {
                    const closesStorage = storage.find(item => item.name === 'Europe');
                    storageRes.push([country[i], closesStorage]);
                    break;
                } else if (storagesNames.includes('NorthAmerica1')) {
                    const closesStorage = storage.find(item => item.name === 'NorthAmerica1');
                    storageRes.push([country[i], closesStorage]);
                    break;
                } else {
                    const closesStorage = storage.find(item => item.name === 'NorthAmerica2');
                    storageRes.push([country[i], closesStorage]);
                    break;
                }
            }
            case 'Australia': {
                if (storagesNames.includes('Asia')) {
                    const closesStorage = storage.find(item => item.name === 'Asia');
                    storageRes.push([country[i], closesStorage]);
                    break;
                } else if (storagesNames.includes('Europe')) {
                    const closesStorage = storage.find(item => item.name === 'Europe');
                    storageRes.push([country[i], closesStorage]);
                    break;
                } else if (storagesNames.includes('NorthAmerica1')) {
                    const closesStorage = storage.find(item => item.name === 'NorthAmerica1');
                    storageRes.push([country[i], closesStorage]);
                    break;
                } else {
                    const closesStorage = storage.find(item => item.name === 'NorthAmerica2');
                    storageRes.push([country[i], closesStorage]);
                    break;
                }
            }
        }
    }

    return storageRes;
}