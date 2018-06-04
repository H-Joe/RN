/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom, TabBarTop} from "react-navigation";
import { HomePage } from "./pages/HomePage";
import { MinePage } from "./pages/MinePage";
import { TabBarItem } from './custom/TabBarItem';

const TabBar = TabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '首页',
      tabBarIcon: ({focused, tintColor}) => (
        <TabBarItem 
          tintColor={tintColor}
          focused={focused}
          normalImage={require('./images/tabbar_home.png')}
          selectedImage = {require('./images/tabbar_home_highlighted.png')}
          />
      )
    })
  },
  Mine: {
    screen: MinePage,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '我',  
      tabBarIcon: ({focused, tintColor}) => (
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('./images/tabbar_profile.png')}
          selectedImage={require('./images/tabbar_profile_highlighted.png')}/>
      )
    })
  }
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
    // tabBarComponent: TabBarTop,
    // tabBarPosition: 'top',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#06c1ae',
    inactiveTintColor: '#979797',
    style: {backgroundColor: '#ffffff'},
    labelStyle: { fontSize: 15,}
  }
})
const Navigator = StackNavigator({
  tab: {
    screen: TabBar
  }
}, {
  navigationOptions: {
    // title: '标题',
    // headerStyle: { backgroundColor: '#5da8ff' },
    // headerTitleStyle: { color: '#333333' },
    headerBackTitle: null,
    headerTintColor: '#333333',
    showIcon: true,
    swipeEnabled: false,
    animationEnabled: false
  },
  mode: 'card'
})

export default class App extends Component{
  render() {
    return (
      <Navigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
