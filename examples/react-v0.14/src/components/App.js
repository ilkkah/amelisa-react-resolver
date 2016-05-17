import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default class App extends React.Component {
  static displayName = "App"

  static contextTypes = {
    model: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <section className="blue-grey lighten-5">
        <Header />

        <main className="container">
          {this.props.children}
        </main>

        <Footer />
      </section>
    );
  }
}
