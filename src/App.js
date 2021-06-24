import "./App.css";
import React from "react";
import { Keyboard } from "./keyboard.js";
import { keyType} from "./keyType.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
      calculation: [],
    };
    this.updateDisplayValue = this.updateDisplayValue.bind(this);
    this.eraseOne = this.eraseOne.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  updateDisplayValue(e) {
    const length = this.state.displayValue.length - 1 
    if(this.state.displayValue === '0'){
       this.setState(({
         displayValue: e
       }))
     }else if(!/[/*-+]/.test(this.state.displayValue[length])){
       this.setState(({
         displayValue: this.state.displayValue + '' + e
       }))
     }
  }
  eraseOne() {
    const length = this.state.displayValue.length;
    if(length > 1){
    this.setState({
      displayValue: this.state.displayValue.substring(0, length-1),
    });
  }else{
    this.setState(({
      displayValue:'0'
    }))
  }
  }
  handleChange(e) {
    const value = e.type === 'click' ? e.target.value : e.key;
    const calc = [...this.state.calculation];
    const action = keyType(value,calc);
    switch (action){
      case 'erase': this.eraseOne()
      break;
      case 'updateDisplay': this.updateDisplayValue(value)
      break;
      case 'enter': this.setState(({displayValue:'0',calculation:[...calc,this.state.displayValue]}))
      break;
      case 'delete': this.setState(({displayValue:'0',calculation:[]}))
      break;
      default: {}
    }
  }
  componentDidMount(){
    document.addEventListener('keydown',this.handleChange);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="container mt-5 pt-5">
          <Keyboard
            handleChange={this.handleChange}
            eraseOne={this.eraseOne}
            displayValue={this.state.displayValue}
            calculation={this.state.calculation}
          />
        </div>
      </div>
    );
  }
}
export default App;
