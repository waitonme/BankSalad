/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native'
import AppStack from './screens'
import BackgroundColor from 'react-native-background-color';

class App extends Component {
  componentDidMount() {
    BackgroundColor.setColor('#FFFFFF');
  }

  render() {
    return (
      <AppStack />
    );
  }
};

export default App;
