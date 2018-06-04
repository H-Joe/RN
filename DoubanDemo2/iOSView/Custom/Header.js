import React ,{ Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity , Platform} from "react-native";

const isiOS = Platform.OS === 'ios';
export class Header extends Component {
  render(){
    return(
      <View style={[styles.container, {height: isiOS? 64: 64, paddingTop: isiOS? 20: 0,}]}>
      {this.props.hiddenLeft ?
      <View style={{ padding: 5 }}></View>
      :
      this.props.leftView ?
      this.props.leftView
      :
      <TouchableOpacity activeOpacity={0.8} style={styles.leftButton} onPress={this.props.onBackPress}>
        {/* <Image source={Images.ic_back_white} style={styles.image} /> */}
        <View style={styles.leftButtonA}></View>
      </TouchableOpacity>
    }
    <View style={styles.center}>
      {this.props.centerView ?
        this.props.centerView
        :
        <Text numberOfLines={1} style={styles.title}>{this.props.title}</Text>
      }
    </View>
    {
      this.props.hiddenRight?
      <View style={{padding: 5}}></View>
      :
      this.props.rightView? this.props.rightView
      : 
    <TouchableOpacity activeOpacity={0.8} style={styles.rightView} onPress={this.props.onRightPress}>
      {this.props.rightView}
    </TouchableOpacity>
    }
      </View>
    )
  }
}

const styles = StyleSheet.create({
   container: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
      //  backgroundColor: '#e91e63',
      backgroundColor: 'white',
     },
     leftButton: {
       padding: 15,
     },
     leftButtonA: {
      height: 15,
      width: 15,
      borderLeftWidth: 3,
      borderBottomWidth: 3,
      borderColor: '#e91e63',
      // borderColor: 'white',
      transform:[{rotate: '45deg'}]
     },
     image: {
       height: 25,
       width: 21,
       padding: 5,
       marginLeft: 12,
     },
     center: {
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
     },
     title: {
       fontSize: 18,
       color: '#e91e63',
       fontWeight: 'bold',
     },
     rightView: {
       padding: 15,
       marginRight: 15,
     },
})