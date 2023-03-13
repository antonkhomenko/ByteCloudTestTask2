
export const getSelectedCountries = (countries) => {
    return countries.filter(item => item.selectedUsers > 0);
}