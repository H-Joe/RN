import React, { Component } from "react";
import { 
  StyleSheet,
  View,
  Text
 } from "react-native";
 import { Navigator } from "react-native-deprecated-custom-components";

 export class  Navigation extends Component {
   render () {
     var rootRoute = {
       component: this.props.component,
       passProps: {}
     }
     return (
       <Navigator 
        initialRoute={rootRoute}
        configureScene={()=>{return Navigator.SceneConfigs.PushFromRight}}
        renderScene={(route, navigator)=>{
          var Component = route.component;
          return (
            <View style={{flex: 1,}}>
              <Component 
                navigator={navigator}
                route={route}
                {...route.passProps}/>
            </View>
          )
        }}
        />
     )
   }
 }
