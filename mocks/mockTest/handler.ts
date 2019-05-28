const data = require('./dataJson/data');
module.exports = (server) => {
    server.get('/rest/api/test', (req, res) => {
        console.log('/rest/api/test');
        console.log(req);
        const status = 200;
        setTimeout(() => res.status(status).json(data), 1000);
    });
}