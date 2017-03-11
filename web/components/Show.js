import React from "react";

export default class Show extends React.Component {
  static propTypes = {
    children: React.PropTypes.element,
    routeParams: React.PropTypes.objectOf(React.PropTypes.string),
  }

  render() {
    return (
      <h4>
        Showing Item: {this.props.routeParams.id}
      </h4>
    );
  }
}
