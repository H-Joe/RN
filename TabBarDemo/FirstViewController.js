import React ,{ Component } from "react";
import { 
  StyleSheet,
  View,
  Text
 } from "react-native";

 export class FirstViewController extends Component {
  /* 生命周期 */
  // 阶段1
   constructor(props) {
     super(props);
     console.log('--------->' + 'constructor');
   }

   // 阶段2
   componentWillMount (){
     console.log('--------->' + 'componentWillMount');
   }
   componentDidMount () {
     console.log('--------->' + 'componentDidMount');
   }
   // 阶段3
   componentWillReceiveProps () {
     console.log('--------->' + 'componentWillReceiveProps');
   }
   shouldComponentUpdate () {
     console.log('--------->' + 'shouldComponentUpdate');
     return true;
   }
   componentWillUpdate (){
     console.log('--------->' + 'componentWillUpdate');
   }
   componentDidUpdate () {
     console.log('--------->' + 'componentDidUpdate');
   }
   // 阶段4
   componentWillUnmount () {
     console.log('--------->' + 'componentWillUnmount');
   }
   render () {
     console.log('--------->' + 'render');
     return (
       <View style={{flex: 1, backgroundColor: 'green',}}></View>
     )
   }
 }