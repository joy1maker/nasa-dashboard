const { plantes } = require('../../models/plantes.model');

function getAllPlantes(req, res) {
    console.log(plantes.length);
    return res.status(200).json(plantes);
}

module.exports = {
    getAllPlantes
}