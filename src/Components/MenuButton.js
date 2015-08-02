'use strict';

var React = require('react-native');

var {
  TouchableOpacity,
  Text,
  Image,
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
        <Image style={this.props.style} source={require('image!menubutton')} />
      </TouchableOpacity>
    );
  }

}

module.exports = MenuButton;
