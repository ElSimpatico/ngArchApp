const glob = require('glob');
const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('router.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

const workSpace = process.cwd();
const handlersPath = glob.sync(path.resolve(workSpace, 'mocks/**/handler.ts'));

handlersPath.forEach(handlerPath => {
    require(handlerPath)(server);
});

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.status !== 404) {
        return next();
    }
    return res.status(404).json({
        errorCode: 'endpoint.not.found',
        message: 'The endpoint you want to access has not associated resource'
    });
});

server.use(router);
server.listen(4200, (err) => {
    if (err) {
        console.error('[ERROR] server start', err);
    } else {
        console.log('JSON Server is running');
    }
});
