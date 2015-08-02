'use strict';

var React = require('react-native');

var { NavigatorIOS } = React;

class StatusBar extends React.Component {

  render() {
    return(
      <NavigatorIOS initialRoute={{ title: 'Vou de ônibus' }} />
    );
  }

}

module.exports = StatusBar;
