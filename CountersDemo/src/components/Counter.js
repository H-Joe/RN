import React ,{ Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "./Button";

export class Counter extends Component {
  render(){
    const { count, decrementFn, incrementFn} = this.props
    return(
      <View style={styles.container}>
        <Button onclick={decrementFn} text={'➖'}/>
        <Text style={styles.text}>{count}</Text>
        <Button onclick={incrementFn} text={'➕'}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    width: 200,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  text:{
    width: 40,
    textAlign: 'center'
  }
})