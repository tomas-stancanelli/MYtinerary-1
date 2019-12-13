import React from 'react';
import { StatusBar, View, Image, TouchableOpacity } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

class Profile extends React.Component {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  redirect = (screen) => {
    const { navigate } = this.props.navigation;
    this.hideMenu();
    navigate(screen);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start', padding: 2 }}>

        <Menu
          ref={this.setMenuRef}
          button={<TouchableOpacity
            onPress={this.showMenu}>
              <Image source={require('../assets/img/Mr-X.jpg')} style={{ width: 40, height: StatusBar.currentHeight }} />
          </TouchableOpacity>
          }
        >
          <MenuItem onPress={() => this.redirect('Login')}>Login</MenuItem>
          <MenuItem onPress={() => this.redirect('CreateAccount')}>Create Account</MenuItem>
        </Menu>
      </View>
    );
  }
}

export default Profile;