import React ,{ Component } from "react";
import { 
  StyleSheet,
  View,
  Text
 } from "react-native";

export class Header extends Component{
  render () {
    return (
      <View style={styles.container}>
       <Text style={styles.font}>
          <Text style={styles.font_1}>网易</Text>
          <Text style={styles.font_2}>新闻</Text>
          <Text>有态度</Text>
          {/* <Text style={styles.font_1}>{this.props.name}</Text> */}
       </Text>
      </View>
    );
  }
 }
 const styles=StyleSheet.create({
   container: {
     marginTop: 25,
     height: 40,
     borderBottomWidth: 1,
     borderBottomColor: '#EF2D36',
     alignItems: 'center',
     flexDirection: 'column',
   },
   font: {
     fontSize: 25,
     fontWeight: 'bold',
     textAlign: 'center'
   },
   font_1: {
     color: '#CD1D1C'
   },
   font_2: {
     color: '#FFF',
     backgroundColor: '#CD1D1C',
   }
 });





