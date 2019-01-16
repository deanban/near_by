import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  render() {
    return <Context.Provider>{this.props.children}</Context.Provider>;
  }
}

export const Consumer = Context.Consumer;
