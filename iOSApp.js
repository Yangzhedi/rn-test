/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from "./src/App-iostest";

type Props = {};

export default class iOSApp extends Component<Props> {
  render() {
    return (
      <App/>
    );
  }
}

const styles = StyleSheet.create({
  welcome:{
    color: 'red'
  }
});
