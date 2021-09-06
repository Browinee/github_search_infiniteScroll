export const noop = () => {
};

const Month_Map: { [month: string]: string } = {
    '0': "Jan",
    '1': "Feb",
    '2': "Mar",
    '3': "April",
    '4': "May",
    '5': "June",
    '6': "July",
    '7': "Aug",
    '8': "Sep",
    '9': "Oct",
    '10': "Nov",
    '11': "Dec",
};
export const getLastUpdated = (time: string): string => {
    const dateObj = new Date(time);
    const month = Month_Map[(dateObj.getMonth() + 1).toString()];
    const date = dateObj.getDate();
    return `Updated at ${date} ${month}`

}

// refactor
export const getLicense = (license: any) => {
    return license ? `${license.spdx_id} license` : ''
}