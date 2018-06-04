import React, { Component } from "react";
import { 
  StyleSheet,
  View,
  Text,
  WebView
 } from "react-native";
 import { Header } from "./Header";

 export default class CustomWebView extends Component {
   render () {
     const {title, url} = this.props.navigation.state.params;
     return (
       <View style={{flex: 1, backgroundColor: 'white',}}>
         <Header title={title} onBackPress={()=>{this.props.navigation.pop()}}/>
         <WebView
          startInLoadingState={true}
          // contentInset={{top: -44, bottom: -120,}}
          source={{url: url}}/>
       </View>
     )
   }
 }