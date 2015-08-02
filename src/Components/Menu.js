'use strict';

var React = require('react-native');

var {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Dimensions,
} = React;

var window = Dimensions.get('window');
var uri = 'https://pbs.twimg.com/profile_images/597005704927571968/8xyBtt4U.jpg';

var styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

class Menu extends React.Component {

  render() {
    return(
      <ScrollView style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{uri}} />
          <Text style={styles.name}>Username</Text>
        </View>
        <Text style={styles.item}>Editar perfil</Text>
        <Text style={styles.item}>Editar Vou agora</Text>
        <Text style={styles.item}>Editar Trabalho</Text>
        <Text style={styles.item}>Editar Estudo</Text>
        <Text style={styles.item}>Adicionar categoria</Text>
        <Text style={styles.item}>Mande sua opinião</Text>
        <Text style={styles.item}>Condições de uso</Text>
        <Text style={styles.item}>Sobre nós</Text>
        <Text style={styles.item}>Sair da minha conta</Text>
      </ScrollView>
    );
  }

}

module.exports = Menu;
