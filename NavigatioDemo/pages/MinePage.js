import React ,{ Component } from "react";
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

export class MinePage extends Component {
  static navigationOptions = {
    headerTitle: '我',
    // titleStyle: { color: '#ff00ff' },
    // headerStyle: { backgroundColor: '#000000' }
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center',height: 30,}} onPress={this.skip.bind(this)}>
          <Text>点击跳转</Text>
        </TouchableOpacity>
      </View>
    )
  }
  skip(){
    // this.props.navigation.navigate('Home')
    this.props.navigation.goBack();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})