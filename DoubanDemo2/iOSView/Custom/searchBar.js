import React, { Component } from "react";
import { 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
 } from "react-native";

 export class SearchBar extends Component {
   constructor(props) {
     super(props);
   }
   render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} {...this.props}/>
        </View>
        <TouchableOpacity style={styles.btn} {...this.props}>
          <Text style={styles.btnText}>搜索</Text>
        </TouchableOpacity>
      </View>
    )
   }
 }
 const styles = StyleSheet.create({
  container: {
    flex: 1 , 
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // height: 40, 
    margin: 2,
    padding: 2,
    // backgroundColor: '#ffffff',
  },
  inputContainer: {
    flex: 1,
    marginLeft: 5,
  },
  input: {
    flex: 1,
    // height: 44,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#e91e63',
    paddingLeft: 5,
  },
  btn: {
    width: 55,
    // height: 40,
    marginHorizontal: 5,
    // backgroundColor: '#23BEFF',
    // backgroundColor: 'white',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  btnText: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#e91e63',
    textAlign: 'center',
    lineHeight: 35
  }
 });