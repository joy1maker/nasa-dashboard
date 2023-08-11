const http = require('http');


const app = require('./app');
const { parseCsvFile } = require('./models/plantes.model');
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

async function startServer() {
    await parseCsvFile();
    server.listen(PORT, () => {
        console.log("listening to port ", PORT);
    })
}
startServer();