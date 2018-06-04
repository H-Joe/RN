import React ,{ Component } from "react";
import { StackNavigator } from "react-navigation";
import { Tabbar } from "../TabNavigator/index";
import BookDetail from "../Books/bookDetails";
import  MovieDetail  from "../Movies/movieDetails";
// import  MovieDetail  from "./../Custom/customWebView";

const RouteConfigs = {
  Main: {
    screen: Tabbar,
  },
  BookDetail:{
    screen: BookDetail,
  },
  MovieDetail: {
    screen: MovieDetail,
  }

}

const StackNavigatorConfigs = {
  initialRouteName: 'Main',
  initialRouteParams: {initPara: '初识页面参数'},
  navigationOptions: {
    title: '标题',
    header: null,
    // // header: (<View style={{height: 49 + 20, backgroundColor: 'red',}}></View>),
    // // headerLeft: (<View style={{width: 30,height: 30, backgroundColor: 'red',}}></View>) ,
    // headerRight: ( <View style = {
    //       {
    //         width: 30,
    //         height: 30,
    //         backgroundColor: 'red',
    //       }
    //     } ></View>) ,
    headerStyle: {
      height: 49,
      shadowOpacity: 0
    },
    headerTitleStyle: {fontSize: 18},
  },
  path: '',
  mode: 'card',
  headerMode: 'screen',
  cardStyle: {backgroundColor: '#ffffff',},
  transitionConfig: (() => {

  }),
  onTransitionStart: (()=>{
    console.log('页面跳转动画开始');
  }),
  onTransitionEnd: (()=>{
    console.log('页面跳转动画结束');
  })
}

const Navigator = StackNavigator(RouteConfigs, StackNavigatorConfigs);

export {Navigator}