/*  @flow */
import React from 'react'
import { Dimensions } from 'react-native'

import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems} from "react-navigation";

import { LibraryModule, TavastEventsModule, RSSFeedModule, WebViewModule, Event, Release } from 'LibraryModule';
import { MainHeader, BackHeader } from './components/header';
import DrawerContent from './components/drawerContent';
import { requestLocationPermission } from 'src/components/Permission';

import colors from 'src/config/colors';

const Events = createStackNavigator({
  Events: { 
    screen: props => <TavastEventsModule colors={colors} {...props} />,
    navigationOptions: { header: <MainHeader/>}
    },
  Details: { 
    screen: props => <Event colors={colors} {...props} />,
    navigationOptions: { header: <BackHeader/>}
    }
  });

const Feed = createStackNavigator({
  Events: {
    screen: props => <RSSFeedModule colors={colors} {...props} />,
    navigationOptions: { header: <MainHeader/>}
    },
  Details: { 
    screen: props => <Release colors={colors} {...props} />,
    navigationOptions: { header: <BackHeader/>}
    }
  });

const Library = createStackNavigator({
  Library: {
    screen: props => <LibraryModule colors={colors} {...props} />,
    navigationOptions: { header: <MainHeader/>}
    },
  }
);

const Timetables = createStackNavigator({
  Timetables: {
    screen: () =>
    <WebViewModule
      src={'https://reittiopas.hameenlinna.fi'}
      modalVisible={true}
      onLoadEnd={() => requestLocationPermission()}
      modalTimeout={2000}
    />
  },      
},
{
  defaultNavigationOptions: {
      header: <MainHeader/>
    },
  }
);

const Omaolo = createStackNavigator({
  Omaolo: {
    screen: () =>
      <WebViewModule
        src={'https://www.omaolo.fi/'}
        modalVisible={true}
        modalTimeout={2000}
      />
  },      
},
{
  defaultNavigationOptions: {
      header: <MainHeader/>
    },
  }
);

const Liikuntalukkari = createStackNavigator({
  Liikuntalukkari: {
      screen: () => 
        <WebViewModule
          src={'https://lastenliikunnantuki.fi/kouluikaiset/liikuntalukkari/'}
          modalVisible={true}
          modalTimeout={2000}
        />
  },      
},
{
  defaultNavigationOptions: {
      header: <MainHeader/>
    },
  }
);

const Preschool = createStackNavigator({
  Preschool: {
    screen: () => 
      <WebViewModule
        src={'https://www.hameenlinna.fi/varhaiskasvatus-ja-koulutus/varhaiskasvatus/linnanlapset/'}
        modalVisible={true}
        modalTimeout={2000}
      />
  },      
},
{
  defaultNavigationOptions: {
      header: <MainHeader/>
    },
  }
);

const CityFeedback = createStackNavigator({
  CityFeedback: {
    screen: () =>
      <WebViewModule
        src={'https://kartta.hameenlinna.fi/eFeedback/fi'}
        modalVisible={true}
        modalTimeout={2000}
      />
  },      
},
{
  defaultNavigationOptions: {
      header: <MainHeader/>
    },
  }
);

const AppFeedback = createStackNavigator({
  AppFeedback: {
    screen: () =>
      <WebViewModule
        src={'https://forms.office.com/Pages/ResponsePage.aspx?id=XqQmtCYLQEqR4Vq36HiY7HqaUnuNRPREiREiRmzQwbZUNjlEVjhSMDNTWDVTSlE3NE5ESTFER0dTTy4u'}
        modalVisible={true}
        modalTimeout={2000}
      />
  },      
},
{
  defaultNavigationOptions: {
      header: <MainHeader/>
    },
  }
);

const  Drawer = createDrawerNavigator ({
  'Tapahtumat': Events,
  'Ajankohtaista': Feed,
  'Kirjastokortti': Library,
  'Bussiaikataulut': Timetables,
  'Omaolo': Omaolo,
  'Liikuntalukkari': Liikuntalukkari,
  'Linnanlapset': Preschool,
  'Palaute kaupungille': CityFeedback,
  'Palaute sovelluksesta': AppFeedback,
  },
  {
    contentComponent: DrawerContent,
    drawerWidth: Dimensions.get('window').width * 0.8
  }
);

export const DrawerContainer = createAppContainer(Drawer);
