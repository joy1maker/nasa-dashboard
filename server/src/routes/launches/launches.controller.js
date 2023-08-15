const { getAllLaunches, addNewLaunch, abortLaunch, existLaunchWithId } = require('../../models/launches.model');
const { hasEmptyValues, isDateValid } = require("../../assets/helpers");



function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}
function httpAddNewLaunch(req, res) {
    const launch = req.body;
    if (hasEmptyValues(launch)) {
        return res.status(400).json({
            'error': "missing required launch properties"
        })
    }
    launch.launchDate = new Date(launch.launchDate);
    if (!isDateValid(launch.launchDate)) {
        return res.status(400).json({
            'error': "date is not valid"
        })
    }
    addNewLaunch(launch);
    return res.status(201).json(req.body);
}
function httpAbortLaunch(req, res) {
    const launchId = +req.params.id;
    if (!existLaunchWithId(launchId)) {
        return res.status(404).json({
            "error": "flight number not found"
        });
    }
    const aborted = abortLaunch(launchId);
    return res.status(200).json(aborted);
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
}