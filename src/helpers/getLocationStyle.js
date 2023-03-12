
export const getLocationStyle = (id) => {
    const styles = [
        {top: '35%', left: '15%', name: "NorthAmerica", showDevice: false, selectedUsers: 0},
        {top: '64%', left: '26%', height: "21%" ,name: 'SouthAmerica', showDevice: false, selectedUsers: 0},
        {top: '30%', left: '45%', width: "17%", height: "18%", name: 'Europe', showDevice: false, selectedUsers: 0},
        {top: '42%', left: '67%', width: "16%", height: "19%", name: 'Asia',  showDevice: false, selectedUsers: 0},
        {top: '70%', left: '76%', name: 'Australia', showDevice: false, selectedUsers: 0},
    ];

    return styles[id];
}