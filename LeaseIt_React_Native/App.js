import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
    View,
    Text,
    Button,
    Image,
    TouchableHighlight
} from 'react-native';
import Login from './Screen/Login';




class App extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return <Application/>;
  }

}

  const MainNavigator = createStackNavigator(

    {
        LoginScreen: {screen: Login},
    },

    {
        initialRouteName: 'LoginScreen',
    }

  );

  const Application = createAppContainer(MainNavigator);

export default App;