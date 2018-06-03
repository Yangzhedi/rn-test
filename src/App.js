import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import React from "react";

import Home from "./route/home";
import Article from "./route/article";
import Video from "./route/video";
import Me from "./route/me";
import Login from "./route/Login";



const MyTab = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation, screenProps}) => ({
      tabBarVisible: true,
      tabBarLabel: "首页"
    })
  },
  Article: {
    screen: Article,
    navigationOptions: ({navigation, screenProps}) => ({
      gesturesEnabled: true,
      tabBarVisible: true,
      tabBarLabel: "文章"
    })
  },
  Video: {
    screen: Video,
    navigationOptions: ({navigation, screenProps}) => ({
      gesturesEnabled: true,
      tabBarVisible: true,
      tabBarLabel: "通知"
    })
  },
  Me: {
    screen: Me,
    navigationOptions: ({navigation, screenProps}) => ({
      gesturesEnabled: true,
      tabBarVisible: true,
      tabBarLabel: "我的"
    })
  }
}, {
  tabBarPosition: "bottom",
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  initialRouteName: "Home",
  backBehavior: "none",
  tabBarOptions: {
    style: {
      height: 45
    },
    labelStyle: {
      fontSize: 11,
      paddingVertical: 0,
      marginTop: 0
    },
    tabStyle: {
      backgroundColor: "white"
    },
    activeTintColor: "black",
    inactiveTintColor: "blue",
    activeBackgroundColor: "blue",
    inactiveBackgroundColor: "green",
    showLabel: true,
    showIcon: true,
    upperCaseLabel: false
  }

});

/*配置顶级页面路由*/
const AllPages = Object.assign({
  MyTab: {
    screen: MyTab,
  }
}, Login);

// const Pages = Object.assign(TopPages);

const App = createStackNavigator(AllPages, {
  initialRouteName: "MyTab", // 设置默认的页面组件
});

// NetInfo.isConnected.addEventListener("change", (isConnected) => {
//   NetInfo.fetch().then((reach) => {
//     console.log(isConnected);
//     console.log("network", reach);
//   });
// });

export default () => <App />