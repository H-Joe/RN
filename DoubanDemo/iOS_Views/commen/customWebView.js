import React, { Component } from "react";
import { 
  StyleSheet,
  View,
  Text,
  WebView
 } from "react-native";
 import { Header } from "./header";

 export default class CustomWebView extends Component {
   render () {
     return (
       <View style={{flex: 1, backgroundColor: 'white',}}>
         <Header 
          navigator={this.props.navigator}
          initObj={{
            backName: this.props.backName,
            barTitle: this.props.barTitle
          }}/>
         <WebView
          startInLoadingState={true}
          // contentInset={{top: -44, bottom: -120,}}
          source={{url: this.props.url}}/>
       </View>
     )
   }
 }