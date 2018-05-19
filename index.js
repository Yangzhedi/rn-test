import { AppRegistry, Platform } from 'react-native';
import IOSApp from './iOSApp';
import AndroidApp from './androidApp'

const App = Platform.select({
  ios: IOSApp,
  android: AndroidApp,
});

AppRegistry.registerComponent('hinataApp', () => App);
