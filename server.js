const net = require('net');

var connections = [];
var userCount = 0;

const server = net.createServer((socket) => {

  console.log(`${socket.remoteAddress} ${socket.remotePort} connected \n`);
  socket.on('data', (chunk) => {
    console.log(`Client: ${chunk}`)
  });

  process.stdin.pipe(socket);

  socket.on('end', () => {
    console.log('client disconnected');
  });
});

server.listen(6969, () => {
    console.log('server bound');
  });