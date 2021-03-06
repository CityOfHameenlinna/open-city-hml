import React from 'react';
import { StyleSheet } from 'react-native';

import colors from 'src/config/colors'

export default StyleSheet.create({
  headerMenu: {
    backgroundColor: '#1e3250',
    height:'100%',
    fontFamily: 'FuturaPT-Book'
  },
  headerItems: {
    fontFamily: 'FuturaPT-Book',
    color: '#f77952',
    fontWeight: 'bold',
    fontSize: 20
  },
  header: {
    backgroundColor: colors.max,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0,
    paddingTop: 0
  },
  headerLogo: {
    width: '100%',
    height: '100%'
  },
  iconStyle: {
    padding: 10,
  }
});
