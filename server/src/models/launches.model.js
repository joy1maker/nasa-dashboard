const launches = new Map();
let lastestFlightNumber = 100;
const launch = {
    flightNumber: 100,
    mission: "keppler mission",
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true
}
launches.set(launch.flightNumber, launch);


function existLaunchWithId(flightId) {
    return launches.has(flightId);
}

function getAllLaunches() {
    return Array.from(launches.values());
}
function addNewLaunch(launch) {
    const newFlightNumber = lastestFlightNumber + 1;
    lastestFlightNumber++;
    Object.assign(launch, {
        flightNumber: newFlightNumber,
        customer: ["youssif", "fayesz"],
        upcoming: true,
        success: true
    })
    launches.set(newFlightNumber, launch);
    return Array.from(launches.values());
}
function abortLaunch(id) {
    const aborted = launches.get(id);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}
module.exports = {
    existLaunchWithId,
    getAllLaunches,
    addNewLaunch,
    abortLaunch
}