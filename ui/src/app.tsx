import * as React from 'react';

export class App extends React.Component<undefined, undefined> {


  addClicked() {
    // producer.js
    var zmq = require('zeromq')
      , sock = zmq.socket('req');

    sock.connect('tcp://localhost:5555');

    var v = sock.send(JSON.stringify({ x: 2, y: 10 }))
    console.log(v.read())
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
