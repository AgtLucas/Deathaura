'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} = React;

var deviceWidth = Dimensions.get('window').width;

var styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.5)',
  },
});

var VDBTabBar = React.createClass({

  selectedTab: [],
  unselectedTab: [],

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  },

  renderTabOption(name, page) {
    var isTabActive = this.props.activeTab === page,
    console.log(name);

    return(
      <TouchableOpacity>
        <View style={[styles.tab]}>
          <Text>{name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

});

module.exports = VDBTabBar;
