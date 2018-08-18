import React from 'react';
import { Button, Text, View, Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./route/home";
import Article from "./route/article";
import VideoScreen from "./route/video";
import Me from "./route/me";
import Login from "./route/Login";
const isiOs = Platform.OS === 'ios';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
// }

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text>Settings!</Text>
      </View>
    );
  }
}

const App = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  Video: VideoScreen,
  User: Me,
},{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          iconName = 'ios-home';
        } else if (routeName === 'Settings') {
          iconName = `ios-help-circle${focused ? '' : '-outline'}`;
          // iconName = focused ? 'ios-american-football': 'md-american-football';
        } else if (routeName === 'Video') {
          iconName = isiOs ? 'ios-image' : 'md-image';
          // iconName = focused ? 'ios-american-football': 'md-american-football';
        } else if (routeName === 'User') {
          iconName = isiOs ? 'ios-person' : 'md-person';
          // iconName = focused ? 'ios-american-football': 'md-american-football';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default () => <App />
