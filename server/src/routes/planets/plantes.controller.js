const { getAllPlantes } = require('../../models/plantes.model');

function httpGetAllPlantes(req, res) {
    return res.status(200).json(getAllPlantes());
}

module.exports = {
    httpGetAllPlantes
}