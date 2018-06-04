import React ,{ Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export class Setting extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>这是Setting页面</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})