class SocketConnection {
  constructor() {
    this.socket = new WebSocket(`ws://localhost:8081/ws`);
  }

  connect = cb => {
    console.log('connecting', this.socket.url);

    this.socket.onopen = () => {
      console.log('Successfully Connected!');
    };

    this.socket.onmessage = msg => {
      cb(msg);
    };

    this.socket.onclose = event => {
      console.log('Socket Closed Connection: ', event);
    };

    this.socket.onerror = error => {
      console.log('Socket Error: ', error);
    };
  };

  sendMsg = msg => {
    // send object as string
    console.log(msg);
    this.socket.send(JSON.stringify(msg));
  };

  connected = user => {
    this.socket.onopen = () => {
      console.log('Successfully Connected', user);
      // initiate mapping
      this.mapConnection(user);
    };
  };

  mapConnection = user => {
    console.log('mapping', user);
    this.socket.send(JSON.stringify({ type: 'bootup', user: user }));
  };
}

export default SocketConnection;
