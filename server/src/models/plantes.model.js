const fs = require('fs');
const path = require('path');

const { parse } = require('csv-parse');
const results = [];

const isHapitable = (row) => {

    const status = row.koi_disposition.toLowerCase();
    const energyLevel = row.koi_insol;
    const planetRaduis = row.koi_prad;
    if (status === 'confirmed' && energyLevel > 0.36 && energyLevel < 1.11 && planetRaduis < 1.6) {
        return true;
    }
    return false;
}
function parseCsvFile() {
    return new Promise((resolve, reject) => {

        const stream = fs.createReadStream(path.join(__dirname, '..', 'data', 'kepler_data.csv'));
        const pipeStream = stream.pipe(parse({ comment: '#', columns: true }));

        pipeStream.on('data', (data) => {
            if (isHapitable(data)) {
                results.push(data);
            }
        });

        pipeStream.on('end', () => {
            console.log("plantes loaded ...");
            resolve(results);
        });

        pipeStream.on('error', (err) => {
            reject(err);
        });
    });
}

module.exports = {
    parseCsvFile,
    plantes: results
}