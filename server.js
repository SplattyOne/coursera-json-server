const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;
const path = require('path')

server.use(middlewares);

// server.use(function (req, res, next) {
//     if (req.method === 'POST') {
//       // Converts POST to GET and move payload to query params
//       // This way it will make JSON Server that it's GET request
//       req.method = 'GET'
//       req.query = req.body
//     }
//     // Continue to JSON Server router
//     next()
//   })

server.get('/api/images/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', req.url.slice(4)));
});

server.use('/api', router);

server.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.listen(port, () => {
    console.log('JSON Server is running')
});