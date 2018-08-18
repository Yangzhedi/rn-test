import { AppRegistry, Platform } from 'react-native';
import iOSApp from './iOSApp';
import AndroidApp from './androidApp'

const App = Platform.select({
  ios: iOSApp,
  android: AndroidApp,
});
// const App = Platform.OS === 'ios' ? IOSApp : AndroidApp;

AppRegistry.registerComponent('hinataApp', () => App);
