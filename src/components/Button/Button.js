import React, { Component } from 'react';

class Button extends Component {
    getConsoleLog = () => console.log('button clicked');

    render() {
      return (<button onClick={this.getConsoleLog}>click me!</button>);
    }
}

export default Button;
