import React from "react";
import {
  setLocalStoreKeyValue,
  getLocalStoreKey,
} from "../helpers/localStorage";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNum: 0,
      maxNum:
        typeof getLocalStoreKey("maxNum") !== "undefined"
          ? Number(getLocalStoreKey("maxNum"))
          : 0,
      minNum:
        typeof getLocalStoreKey("minNum") !== "undefined"
          ? Number(getLocalStoreKey("minNum"))
          : 0,
      step: 1,
    };
  }

  // Inputs values from Local Storage
  getStepfromLocal = (event) => {
    setLocalStoreKeyValue("step", event.target.value);
    this.setState({ step: event.target.value });
  };

  getCurrentfromLocal = (event) => {
    setLocalStoreKeyValue("currentNum", event.target.value);
    this.setState({ currentNum: event.target.value });
  };

  getMinfromLocal = (event) => {
    setLocalStoreKeyValue("minNum", event.target.value);
    this.setState({ minNum: event.target.value });
  };

  getMaxfromLocal = (event) => {
    setLocalStoreKeyValue("maxNum", event.target.value);
    this.setState({ maxNum: event.target.value });
  };

  //increase-decrease-reset buttons clicks

  increaseClick = () => {
    if (this.state.currentNum < this.state.maxNum) {
      this.setState((prevState) => ({
        currentNum: Number(prevState.currentNum) + Number(prevState.step),
      }));
    }
  };

  decreaseClick = () => {
    if (this.state.currentNum > this.state.minNum) {
      this.setState((prevState) => ({
        currentNum: prevState.currentNum - prevState.step,
      }));
    }
  };

  resetClick = () => {
    getLocalStoreKey("maxNum", 0);
    getLocalStoreKey("minNum", 0);
    getLocalStoreKey("step", 0);
    this.setState({
      currentNum: 0,
      maxNum: 0,
      minNum: 0,
      step: 0,
    });
  };

  render() {
    return (
      <div>
        <label>
          Current Number:
          <input
            type="text"
            value={this.state.currentNum}
            onChange={this.getCurrentfromLocal}
          />
        </label>

        <div className="inputs">
          <label>
            MinValue:
            <input
              type="text"
              value={this.state.minNum}
              onChange={this.getMinfromLocal}
            />
          </label>

          <label>
            MaxValue:
            <input
              type="text"
              value={this.state.maxNum}
              onChange={this.getMaxfromLocal}
            />
          </label>

          <label>
            Step:
            <input
              type="text"
              value={this.state.value}
              onChange={this.getStepfromLocal}
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

export default Calculator;
