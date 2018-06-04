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
    // flex: 1 , 
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 44, 
    marginTop: 10,
  },
  inputContainer: {
    flex: 1,
    marginLeft: 5,
  },
  input: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#CCC',
    paddingLeft: 5,
  },
  btn: {
    width: 55,
    height: 44,
    marginHorizontal: 5,
    backgroundColor: '#23BEFF',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  btnText: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color:'#fff',
    textAlign: 'center',
    lineHeight: 44
  }
 });