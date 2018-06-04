import React ,{ Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export class Home extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>这是Home</Text>
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