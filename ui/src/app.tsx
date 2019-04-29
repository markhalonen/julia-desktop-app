import * as React from 'react';
var zmq = require('zeromq')
  , sock = zmq.socket('req');
sock.on('message', (message: any) => {
  console.log(message.toString())
})

export class App extends React.Component<undefined, undefined> {


  addClicked() {
    // producer.js


    sock.connect('tcp://localhost:5555');

    sock.send(JSON.stringify({ x: 2, y: 10 }))

  }

  render() {
    return (
      <div>
        <h2>Welcome to the Julia Adder</h2>
        <button onClick={this.addClicked}>Add these numbers!</button>
      </div>
    );
  }
}
