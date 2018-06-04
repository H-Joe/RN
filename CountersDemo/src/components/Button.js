import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export class Button extends Component {
  render(){
    const {text, onclick} = this.props;
    return(
      <TouchableOpacity style={styles.container} onPress={onclick}>
        <Text>{text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 60,
    borderWidth: 1,
    margin: 5,
  }
})