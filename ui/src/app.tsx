import * as React from 'react';

type State = {
  x: string;
  y: string;
  result: string;
}

export class App extends React.Component<undefined, State> {

  readonly state: State = {
    x: "1",
    y: "1",
    result: "1"
  }

  async addClicked() {
    // producer.js
    let res = await fetch(`http://localhost:8000/pow?x=${this.state.x}&y=${this.state.y}`)
    let json = await res.json()
    this.setState({ result: json["result"] } as State)

  }

  render() {
    return (
      <div>
        <h2>Welcome to a Julia Desktop App</h2>
        <div>
          <span>x: </span>
          <input
            type="text"
            value={this.state.x}
            onChange={(event) => {
              this.setState({ x: event.currentTarget.value } as State)
            }}
          />
        </div>
        <div>
          <span>y: </span>
          <input
            type="text"
            value={this.state.y}
            onChange={(event) => {
              this.setState({ y: event.currentTarget.value } as State)
            }}
          />
        </div>
        <div>
          <button onClick={this.addClicked.bind(this)}>Add these numbers!</button>
        </div>
        <hr />
        <p>Result: {this.state.result}</p>
      </div>
    );
  }
}
