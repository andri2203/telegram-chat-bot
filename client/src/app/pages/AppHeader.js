import React, { Component } from "react";
import "./App.css";

class AppHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        {/* <input id="check" type="checkbox" /> */}
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
      </header>
    );
  }
}

export default AppHeader;
