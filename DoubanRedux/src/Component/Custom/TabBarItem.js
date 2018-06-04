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
          width: 24,
          height: 24
        }
      }
      />
    )
  }
}