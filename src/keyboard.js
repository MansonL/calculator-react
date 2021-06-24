import React from "react";

export class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.eraseOne = this.eraseOne.bind(this);
    this.updateDisplayValue = this.updateDisplayValue.bind(this);
  }
  eraseOne() {
    this.props.eraseOne();
  }
  updateDisplayValue(e) {
    this.props.handleChange(e.target.value);
  }
  render() {
    return (
      <div className="row row-cols-7 gx-1 justify-content-center">
        <div className="col-12 rounded bg-dark text-white text-end justify-content-center">
          <h1 className="display-5">{this.props.calculation.concat(' ')}</h1>
          <h1 className="display-4">{this.props.displayValue}</h1>
        </div>
        <div className="col-2">
          <button
            className="btn btn-outline-dark btn-lg w-100"
            onClick={this.props.handleChange}
            value="7"
          >
            7
          </button>
        </div>
        <div className="col-2">
          <button
            className="btn btn-outline-dark btn-lg w-100 "
            onClick={this.props.handleChange}
            value="8"
          >
            8
          </button>
        </div>
        <div className="col-2">
          <button
            className="btn btn-outline-dark btn-lg w-100 "
            onClick={this.props.handleChange}
            value="9"
          >
            9
          </button>
        </div>
        <div className="col-3">
          <button
            className="btn btn-outline-dark btn-lg w-100 fas fa-backspace pb-3 mt-1"
            onClick={this.props.eraseOne}
          ></button>
        </div>
        <div className="col-3">
          <button className="btn btn-outline-dark btn-lg w-100 ">+/-</button>
        </div>

        <div className="col-2">
          <button
            className="btn btn-outline-dark btn-lg w-100 "
            onClick={this.props.handleChange}
            value="4"
          >
            4
          </button>
        </div>
        <div className="col-2">
          <button
            className="btn btn-outline-dark btn-lg w-100 "
            onClick={this.props.handleChange}
            value="5"
          >
            5
          </button>
        </div>
        <div className="col-2">
          <button
            className="btn btn-outline-dark btn-lg w-100 "
            onClick={this.props.handleChange}
            value="6"
          >
            6
          </button>
        </div>
        <div className="col-3">
          <button className="btn btn-outline-dark btn-lg w-100 "
          onClick={this.props.handleChange}
          value="/">/</button>
        </div>
        <div className="col-3">
          <button className="btn btn-outline-dark btn-lg w-100 "
          onClick={this.props.handleChange}
          value="*">*</button>
        </div>

        <div className="col-2">
          <button
            className="btn btn-outline-dark btn-lg w-100 "
            onClick={this.props.handleChange}
            value="1"
          >
            1
          </button>
        </div>
        <div className="col-2">
          <button
            className="btn btn-outline-dark btn-lg w-100 "
            onClick={this.props.handleChange}
            value="2"
          >
            2
          </button>
        </div>
        <div className="col-2">
          <button
            className="btn btn-outline-dark btn-lg w-100 "
            onClick={this.props.handleChange}
            value="3"
          >
            3
          </button>
        </div>
        <div className="col-3">
          <button className="btn btn-outline-dark btn-lg w-100 "
          onClick={this.props.handleChange}
          value="+">+</button>
        </div>
        <div className="col-3">
          <button className="btn btn-outline-dark btn-lg w-100 "
          onClick={this.props.handleChange}
          value="-">-</button>
        </div>
      </div>
    );
  }
}
