const net = require('net');

let client = net.createConnection(6969, 'localhost');
  let clientList = [];

  client.on('connect', () => {
    console.log('Hello');

    client.on('data', (socket) => {
      console.log(`Server broadcast: ${socket}`)
    });

});