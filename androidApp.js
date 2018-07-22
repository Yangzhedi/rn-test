/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  ToastAndroid
} from 'react-native';
import Svg from './src/svg'
import App from "./src/App";

type Props = {};

let lastBackPressed;
export default class AndroidApp extends Component<Props> {

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid)
  }

  onBackAndroid() {
    if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
      //最近2秒内按过back键，可以退出应用。
      return false
    }
    lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    return true
  }

  render() {
    return (
      <App />
    );
  }
}
const styles = StyleSheet.create({

});
