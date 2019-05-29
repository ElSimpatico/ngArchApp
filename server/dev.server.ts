const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('../mocks/data.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, (err) => {
    if (err) {
        console.error('[ERROR] server start', err);
    } else {
        console.log('JSON Server is running');
    }
});
