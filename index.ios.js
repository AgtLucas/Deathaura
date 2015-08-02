'use strict';

var React = require('react-native');
var SideMenu = require('react-native-side-menu');
var Menu = require('./src/Components/Menu');
var Button = require('./src/Components/MenuButton');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

class VouDeOnibus extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      touchToClose: false
    };
  }

  handleOpenWithTouchToClose() {
    this.setState({
      touchToClose: true
    });
  }

  handleChange(isOpen) {
    if (!isOpen) {
      this.setState({
        touchToClose: false
      });
    }
  }

  render() {
    return(
      <SideMenu
        menu={<Menu />}
        touchToClose={this.state.touchToClose}
        onChange={this.handleChange.bind(this)}>

        <View style={styles.container}>
          <Text style={styles.welcome}>Yo!</Text>
        </View>

        <Button style={styles.menuButton}
          onPress={this.handleOpenWithTouchToClose.bind(this)} />
      </SideMenu>
    )
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#08C',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  menuButton: {
    position: 'absolute',
    width: 35,
    height: 35,
    top: 30,
    left: 10,
    color: '#FFF',
    fontWeight: '600'
  }
});

AppRegistry.registerComponent('VouDeOnibus', () => VouDeOnibus);
