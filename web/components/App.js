import React from "react";
import { Link } from "react-router";

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element,
  }

  render() {
    return (
      <div className="app">
        Routes:
        <ul>
          <li><Link to="list">List</Link></li>
          <li><Link to="show/1">Show</Link></li>
        </ul>
        Content:
        <div>{this.props.children}</div>
      </div>
    );
  }
}
