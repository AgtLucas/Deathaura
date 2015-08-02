'use strict';

var React = require('react-native');
var SideMenu = require('react-native-side-menu');
var ScrollableTabView = require('react-native-scrollable-tab-view');
var Menu = require('./src/Components/Menu');
var Button = require('./src/Components/MenuButton');
var VDBTabBar = require('./src/Components/VDBTabBar');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} = React;

var deviceWidth = Dimensions.get('window').width;

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
        onChange={this.handleChange.bind(this)}
        disableGestures={true}>

        <View style={styles.container}>
          <ScrollableTabView render={() => <VDBTabBar />}>
            <ScrollView tabLabel="Vou Agora" style={styles.tabView}>
              <View style={styles.card}>
                <Text>Vou Agora</Text>
              </View>
              <View style={styles.card}>
                <Text>Vou Agora</Text>
              </View>
              <View style={styles.card}>
                <Text>Vou Agora</Text>
              </View>
              <View style={styles.card}>
                <Text>Vou Agora</Text>
              </View>
              <View style={styles.card}>
                <Text>Vou Agora</Text>
              </View>
              <View style={styles.card}>
                <Text>Vou Agora</Text>
              </View>
              <View style={styles.card}>
                <Text>Vou Agora</Text>
              </View>
            </ScrollView>
            <ScrollView tabLabel="Todas as linhas" style={styles.tabView}>
              <View style={styles.card}>
                <Text>Todas as linhas</Text>
              </View>
            </ScrollView>
          </ScrollableTabView>
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
    paddingTop: 80,
    backgroundColor: '#FFF',
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
    fontWeight: '600',
    backgroundColor: '#08c'
  },
  tabView: {
    width: deviceWidth,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#CCC',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

AppRegistry.registerComponent('VouDeOnibus', () => VouDeOnibus);
