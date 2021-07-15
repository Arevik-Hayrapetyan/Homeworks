import React from "react";

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNum: 0,
      maxNum: 100,
      minNum: 0,
      step: 1,
    };
  }

  
  // Inputs
  handleStep = (event) => {
    console.log("step")
    this.setState({ step: event.target.value });
  };

  handleCurrent = (event) => {
    this.setState({ currentNum: event.target.value });
  };

  handleMin = (event) => {
    this.setState({ minNum: event.target.value });
  };

  handleMax = (event) => {
    this.setState({ maxNum: event.target.value });
  };

  //increase-decrease-reset buttons clicks
  increaseClick = () => {
    console.log("aaaaaa")
    if (this.state.currentNum < this.state.maxNum) {
      this.setState((prevState) => ({
        currentNum: prevState.currentNum + Number(prevState.step),
      }));
    } else {
      return;
    }
  };

  decreaseClick = () => {
    console.log("bbbbbbb")
    if (this.state.currentNum > this.state.minNum) {
      this.setState((prevState) => ({
        currentNum: prevState.currentNum - prevState.step,
      }));
    } else {
      return;
    }
  };

  resetClick = () => {
    console.log("ccccc")
    this.setState({ currentNum: 0 });
  };


  render() {
    return (
      <div>
        <label>
            Current Number:
            <input
              type="text"
              value={this.state.currentNum}
              onChange={this.handleCurrent}
            />
          </label>

        <div className="inputs">
          <label>
            MinValue:
            <input
              type="text"
              value={this.state.minNum}
              onChange={this.handleMin}
            />
          </label>


          <label>
            MaxValue:
            <input
              type="text"
              value={this.state.maxNum}
              onChange={this.handleMax}
            />
          </label>

          <label>
            Step:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleStep}
            />
          </label>
        </div>

        <div className="buttons">
          <button onClick={this.increaseClick}>Increase</button>
          <button onClick={this.decreaseClick}>Decrease</button>
          <button onClick={this.resetClick}>Reset</button>
        </div>
      </div>
    );
  }
}
