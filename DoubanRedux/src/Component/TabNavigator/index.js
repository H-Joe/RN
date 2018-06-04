import React ,{ Component } from "react";
import { TabNavigator, TabBarBottom } from "react-navigation";
import  Book  from "../Books/book";
import  Movie  from "../Movies/movie";
import { TabBarItem } from "../Custom/TabBarItem";
import Icons from "react-native-vector-icons/Ionicons";

const RouteConfigs = {
  Book: {
    screen: Book,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '书籍',
      tabBarIcon: ({ focused, tintColor }) => (
        <Icons
          name={focused ? 'ios-book' : 'ios-book-outline'}
          size={26}
          style={{color: tintColor}}
        />
      )
    })
  },
  Movie: {
    screen: Movie,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '电影',
      tabBarIcon: ({ focused, tintColor}) => (
        <Icons
          name={focused ? 'ios-film' : 'ios-film-outline'}
          size={26}
          style={{color: tintColor}}
        />
      )
    })
  }
}

const TabNavigatorConfigs = {
  initialRouteName: 'Book',
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
    style: { backgroundColor: '#ffffff' },
    labelStyle: { fontSize: 12, }
  }
}

const Tabbar = TabNavigator(RouteConfigs, TabNavigatorConfigs);

export {Tabbar}