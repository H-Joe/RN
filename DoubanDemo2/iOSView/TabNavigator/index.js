import React ,{ Component } from "react";
import { TabNavigator, TabBarBottom } from "react-navigation";
import { Book } from "./../Books/book";
import { Movie } from "./../Movies/movie";
import { TabBarItem } from "./../Custom/TabBarItem";

const RouteConfigs = {
  Book: {
    screen: Book,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '书籍',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('./../../resource/images/book.png')}
          selectedImage = {require('./../../resource/images/book.png')}
          />
      )
    })
  },
  Movie: {
    screen: Movie,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '电影',
      tabBarIcon: ({ focused, tintColor}) => (
        <TabBarItem
          focused={focused}
         tintColor={tintColor}
          normalImage = {require('./../../resource/images/movie.png')}
          selectedImage = {require('./../../resource/images/movie.png')}
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