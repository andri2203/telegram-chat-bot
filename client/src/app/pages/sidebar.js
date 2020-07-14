import React, { Component } from "react";
import "./App.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: window.location.pathname,
    };
  }

  componentDidMount() {
    this.activeHandler();
  }

  activeHandler() {
    var path = this.state.path;
    var nav_item = document.getElementsByClassName("nav-item");
    var tagA = document.getElementsByTagName("a");

    for (let i = 0; i < nav_item.length; i++) {
      const element = nav_item[i];
      var href = tagA[i].getAttribute("href");

      if (path === href) {
        element.className += " active";
      } else {
        element.classList.remove("active");
      }
    }
  }

  render() {
    return (
      <aside className="sidebar">
        <label htmlFor="check">
          <i className="fas fa-window-close"></i>
        </label>
        <h2>Telegram Chatbot</h2>
        <ul>
          <li className="nav-item active">
            <a href="/">
              <i className="fas fa-home fa-fw"></i> Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a href="/reference">
              <i className="fas fa-database fa-fw"></i> Reference
            </a>
          </li>
          <li className="nav-item">
            <a href="/chat">
              <i className="fas fa-comments fa-fw"></i> Chat
            </a>
          </li>
          <li className="nav-item">
            <a href="/settings">
              <i className="fas fa-cog fa-fw"></i> Settings
            </a>
          </li>
          <li className="nav-item">
            <a href="/logout">
              <i className="fas fa-sign-out-alt fa-fw"></i> Logout
            </a>
          </li>
        </ul>

        <div className="social-media">
          <a>
            <i className="fab fa-facebook-square"></i>
          </a>
          <a>
            <i className="fab fa-twitter-square"></i>
          </a>
          <a>
            <i className="fab fa-instagram-square"></i>
          </a>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
