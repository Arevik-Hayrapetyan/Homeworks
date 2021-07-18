import React from "react";
import {
  setLocalStoreKeyValue,
  getLocalStoreKey,
} from "../../helpers/localStorage";
import Input from "../Input/Inputs";
import Button from "../Button/Button";

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
      step:
        typeof getLocalStoreKey("step") !== "undefined"
          ? Number(getLocalStoreKey("step"))
          : 0,
      disabledDec: false,
      disabledInc: false,
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

  handleIncrease = () => {
    if (this.state.currentNum < this.state.maxNum) {
      this.setState((prevState) => ({
        currentNum: Number(prevState.currentNum) + Number(prevState.step),
      }));
    }
  };

  handleDecrease = () => {
    if (this.state.currentNum > this.state.minNum) {
      this.setState((prevState) => ({
        currentNum: Number(prevState.currentNum) - Number(prevState.step),
      }));
    }
  };

  handleReset = () => {
    getLocalStoreKey("maxNum", 0);
    getLocalStoreKey("minNum", 0);
    getLocalStoreKey("step", 0);
    this.setState({
      currentNum: 0,
      maxNum: 0,
      minNum: 0,
      step: 1,
    });
  };

  render() {
    let disabledDec;
    let disabledInc;

    if (
      Number(getLocalStoreKey("currentNum")) <= 0 ||
      Number(getLocalStoreKey("currentNum")) -
        Number(getLocalStoreKey("step")) <
        Number(getLocalStoreKey("minNum"))
    ) {
      disabledDec = true;
    } else {
      disabledDec = false;
    }

    if (
      Number(getLocalStoreKey("currentNum")) +
        Number(getLocalStoreKey("step")) >
      Number(getLocalStoreKey("maxNum"))
    ) {
      disabledInc = true;
    } else {
      disabledInc = false;
    }

    return (
      <div>
        <div className="inputs">
          <label>
            Current Number:
            <Input
              type="number"
              value={this.state.currentNum}
              onChange={this.getCurrentfromLocal}
            />
          </label>
          <label>
            MinValue:
            <Input
              type="number"
              value={this.state.minNum}
              onChange={this.getMinfromLocal}
            />
          </label>
          <label>
            MaxValue:
            <Input
              type="number"
              value={this.state.maxNum}
              onChange={this.getMaxfromLocal}
            />
          </label>
          <label>
            Step:
            <Input
              type="number"
              value={this.state.value}
              onChange={this.getStepfromLocal}
            />
          </label>
        </div>

        <div className="buttons">
          <Button
            onClick={this.handleIncrease}
            disabled={disabledDec}
            id="increase"
          />

          <Button
            onClick={this.handleDecrease}
            disabled={disabledInc}
            id="decrease"
          />

          <Button onClick={this.handleReset} id="reset" />
        </div>
      </div>
    );
  }
}

export default Calculator;
