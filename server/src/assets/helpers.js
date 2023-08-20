
function isDateValid(dateString) {
    const date = new Date(dateString);
    return !(isNaN(date.getTime()) || date.toString() === 'Invalid Date');
}
module.exports = {
    isDateValid
}