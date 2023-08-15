function hasEmptyValues(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (!obj[key]) {
                return true;
            }
        }
    }
    return false;
}
function isDateValid(dateString) {
    const date = new Date(dateString);
    return !(isNaN(date.getTime()) || date.toString() === 'Invalid Date');
}
module.exports = {
    hasEmptyValues,
    isDateValid
}