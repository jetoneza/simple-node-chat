const runServer = require('./bootstrap/server');

runServer(data => {
  const { host, port } = data;
  console.log(`Server running at http://${host}:${port}`)
});
