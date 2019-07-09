/* @flow */
import React from 'react';
import { View, Text } from 'react-native';

import { DrawerContainer } from 'src/modules/DrawerNavigator';
import { setTopLevelNavigator } from 'src/modules/DrawerNavigator/components/NavigationService';

import { HmlSplashScreen, initColors } from 'LibraryModule';
import colors from 'src/config/colors';

type Props= { };

type State = {
	timePassed: boolean,
};

class App extends React.Component<Props, State>{

constructor(props: Props) {
	super(props);
	this.state = {
    timePassed: false,
	};
}

componentDidMount() {
  initColors(colors);
  setTimeout(() => {
    this.setTimePassed();
  }, 3000);
}

setTimePassed() {
  this.setState({timePassed: true});
}

  render() {
    return (
      <View style={{ flex: 1 }}>
        { 
          this.state.timePassed ?
            <DrawerContainer
              ref={navigatorRef => { setTopLevelNavigator(navigatorRef) }}
            /> : <HmlSplashScreen/>
        }
      </View>
    );
  }
}

export default App;
