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
  View
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import { HomePage } from "./pages/HomePage";
import { MinePage } from "./pages/MinePage";
import { TabBarItem } from './custom/TabBarItem';

/**  RouteConfigs 中的 navigationOptions配置
title - 可以作为头部标题 headerTitle ，或者Tab标题 tabBarLabel
header - 自定义的头部组件，使用该属性后系统的头部组件会消失
headerTitle - 头部的标题，即页面的标题
headerBackTitle - 返回标题，默认为 title
headerTruncatedBackTitle - 返回标题不能显示时（比如返回标题太长了）显示此标题，默认为 “Back”
headerRight - 头部右边组件
headerLeft - 头部左边组件
headerStyle - 头部组件的样式
headerTitleStyle - 头部标题的样式
headerBackTitleStyle - 头部返回标题的样式
headerTintColor - 头部颜色
headerPressColorAndroid - Android 5.0 以上MD风格的波纹颜色
gesturesEnabled - 否能侧滑返回， iOS 默认 true ， Android 默认 false
 */
const RouteConfigs = {
  Home: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => ({
      title: '首页',
    }),
  },
  Mine: {
    screen: MinePage,
    navigationOptions: ({ navigation }) => ({
      title: '我的',
    }),
  },
}
/** StackNavigatorConfig说明
initialRouteName - 导航器组件中初始显示页面的路由名称，如果不设置，则默认第一个路由页面为初始显示页面
initialRouteParams - 给初始路由的参数，在初始显示的页面中可以通过 this.props.navigation.state.params 来获取
navigationOptions - 路由页面的配置选项，它会被 RouteConfigs 参数中的 navigationOptions 的对应属性覆盖。
path - 路由中设置的路径的覆盖映射配置
mode - 页面跳转方式，有 card 和 modal 两种，默认为 card ：
card - 原生系统默认的的跳转
modal - 只针对iOS平台，模态跳转
headerMode - 页面跳转时，头部的动画模式，有 float 、 screen 、 none 三种：
float - 渐变，类似iOS的原生效果
screen - 标题与屏幕一起淡入淡出
none - 没有动画
cardStyle - 为各个页面设置统一的样式，比如背景色，字体大小等
transitionConfig - 配置页面跳转的动画，覆盖默认的动画效果
onTransitionStart - 页面跳转动画即将开始时调用
onTransitionEnd - 页面跳转动画一旦完成会马上调用
 */
const StackNavigatorConfig = {
  initialRouteName: 'Home',
  initialRouteParams: { initPara: '初始页面参数' },
  navigationOptions: {
    title: '标题',
    // headerBackTitle: null,
    headerTitleStyle: { fontSize: 18, color: 'red' },
    headerStyle: { height: 48, backgroundColor: 'green' },
  },
  path: 'pages/HomePage',
  mode: 'card',
  headerMode: 'screen',
  cardStyle: { backgroundColor: "#ffffff" },
  // transitionConfig: (() => ({
  //   screenInterpolator: CardStackStyleInterpolator.forHorizontal,
  // })),
  onTransitionStart: (() => {
    console.log('页面跳转动画开始');
  }),
  onTransitionEnd: (() => {
    console.log('页面跳转动画结束');
  }),
}

const Navigator = StackNavigator(RouteConfigs, StackNavigatorConfig);

const TabBar = TabNavigator({
  Nav1: {
    screen: Navigator,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '首页'
    })
  },
  Nav2: {
    screen: Navigator,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '我'
    })
  }
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
})
export default class App1 extends Component {
  render() {
    return (
      // <Navigator />
      <TabBar/>
    );
  }
}
