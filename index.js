const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World! finally lab done(without docker HUB)');
})

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

