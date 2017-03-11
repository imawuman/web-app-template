import React from "react";

export default class List extends React.Component {
  static propTypes = {
    children: React.PropTypes.element,
  }

  render() {
    return (
      <h4>
        Listing
      </h4>
    );
  }
}
