import React, { Component } from "react";
import { 
  StyleSheet,
  View,
  Text,
  TouchableOpacity
 } from "react-native";
 import { Left_Icon } from "./left_icon";

 export class Header extends Component {
   render (){
     var headerContent = this.props.initObj;
    return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.leftBtn} onPress={() => this._pop()}>
         <Left_Icon />
         <Text style={styles.btn_text}>{headerContent.backName}</Text>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>{headerContent.barTitle}</Text>
        </View>
        <View style={{width: 55,}}></View>
      </View>
    )
   }
   // 返回按钮事件
   _pop(){
     this.props.navigator.pop();
   }
 }

 const styles = StyleSheet.create({
   header: {
     height: 44,
     backgroundColor: '#3497FF',
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center'
   },
   leftBtn : {
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center'
   },
   btn_text: {
     color: '#fff',
     fontSize: 17,
     fontWeight: 'bold',
   },
   titleContainer: {
     marginLeft: 10,
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   },
   title: {
     color: '#fff',
     fontSize: 18,
     fontWeight: 'bold',
     lineHeight: 18,
    //  width: 200,
    //  textAlign: 'auto'
   }
 });