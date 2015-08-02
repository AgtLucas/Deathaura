'use strict';

var React = require('react-native');

var {
  TouchableOpacity,
  Text,
} = React;

class MenuButton extends React.Component {

  handlePress(e) {
    this.props.menuActions.toggle();
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    return(
      <TouchableOpacity onPress={this.handlePress.bind(this)}>
        <Text style={this.props.style}>{this.props.childreen}</Text>
      </TouchableOpacity>
    );
  }

}

module.exports = MenuButton;
