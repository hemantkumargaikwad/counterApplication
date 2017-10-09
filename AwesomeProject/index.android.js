/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Store from './android/src/store';
import {Provider} from 'react-redux';
import AppContainer from './android/src/containers/app';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Button
} from 'react-native';

class AwesomeProject extends Component {
    render() {
    return (
        <Provider store={Store}>
            <AppContainer/>
        </Provider>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

