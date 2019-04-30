import * as React from 'react';
import Button from '@material-ui/core/Button';
import { TextField, Typography, Divider, CircularProgress } from '@material-ui/core';

type State = {
  x: string;
  y: string;
  result: string;
  computing: boolean;
}

export class App extends React.Component<undefined, State> {

  readonly state: State = {
    x: "1",
    y: "1",
    result: "1",
    computing: false
  }

  async addClicked() {
    // producer.js
    this.setState({ computing: true } as State)
    let res = await fetch(`http://localhost:8000/pow?x=${this.state.x}&y=${this.state.y}`)
    let json = await res.json()
    this.setState({ result: json["result"], computing: false } as State)

  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h4" style={{ paddingBottom: 20 }}>Welcome to a Julia Desktop App</Typography>
        <div>
          <TextField
            label="x"
            value={this.state.x}
            onChange={(event: any) => {
              this.setState({ x: event.currentTarget.value } as State)
            }}
          />
        </div>
        <div>
          <TextField
            label="y"
            value={this.state.y}
            onChange={(event: any) => {
              this.setState({ y: event.currentTarget.value } as State)
            }}
            style={{ paddingBottom: 20 }}
          />
        </div>
        <div>
          <Button onClick={this.addClicked.bind(this)} disabled={this.state.computing}>Compute x^y!</Button>
        </div>
        <hr />
        {this.state.computing ? <CircularProgress /> : <Typography variant="title">Result: {this.state.result}</Typography>}

      </div>
    );
  }
}
