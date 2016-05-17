import React from "react";
import { context, resolve } from "react-resolver";
import Nav from "./Nav";

@resolve("header", function({ model }) {
  return "header...";
})

export default class Header extends React.Component {
  static displayName = "Header"

  static contextTypes = {
    model: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <header>
        <Nav />
      </header>
    );
  }
}
