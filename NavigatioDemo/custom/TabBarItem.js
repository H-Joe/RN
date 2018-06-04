import React ,{ Component } from "react";
import { 
  StyleSheet,
  View,
  Text,
  Image
 } from "react-native";

export class TabBarItem extends Component {
  render() {
    return(
      < Image source = {
        this.props.focused ? this.props.selectedImage : this.props.normalImage
      }
      style = {
        {
          tintColor: this.props.tintColor,
          width: 25,
          height: 25
        }
      }
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
  }
})