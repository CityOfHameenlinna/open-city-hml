/* @flow */
import React from 'react';
import { View, Image, Text, TouchableHighlight, ImageBackground, StyleSheet  } from 'react-native';
import { Header} from 'react-native-elements';

import { openDrawer, closeDrawer, goBack } from './NavigationService.js';

import logo from 'opencityhml/img/menulogo.png';
import colors from 'src/config/colors';
import styles from '../styles';


export const MainHeader = (props: any) => { 
  return (
    <Header
      leftComponent={{ icon: 'menu', iconStyle: styles.iconStyle, underlayColor: colors.max, color: colors.min, onPress: () => openDrawer() }}
      centerComponent={ <ImageBackground source={logo} resizeMode="center" style={styles.headerLogo} /> }

      containerStyle={styles.header}

      {...props}
    />
  );
}

export const BackHeader = (props: any) => { 
  return (
    <Header
      leftComponent={{ icon: 'arrow-back', iconStyle: styles.iconStyle, underlayColor: colors.max, color: '#FFFFFF', onPress: () => goBack() }}
      centerComponent={ <ImageBackground source={logo} resizeMode="center" style={styles.headerLogo} /> }
      
      containerStyle={styles.header}

      {...props}
    />
  );
}

export const DrawerHeader = (props: any) => { 
  return (
    <Header
      centerComponent={ <ImageBackground source={logo} resizeMode="center" style={styles.headerLogo} /> }
      rightComponent={{ icon: 'close', iconStyle: styles.iconStyle, underlayColor: colors.max, color: colors.min, onPress: () => closeDrawer() }}

      containerStyle={styles.header}

      {...props}
    />
  );
}
