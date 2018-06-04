import React ,{ Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
// import Icon from "react-native-vector-icons/EvilIcons";

export class TabbarItem extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    const {icon, color, title} = this.props;
    return(
      <TouchableOpacity style={[styles.tab, this.props.style]} activeOpacity={0.8} onPress={this.props.goToPage}>
              <View style={styles.tabItem}>
              {
                Icon.hasIcon(icon) ?
                <Icon name={icon} size={26} style={{color:color}}/>
                :
                <Image source={{uri:icon}} style={{width: 26, height: 26, marginBottom: 2,}}/>
              }
                <Text style={[styles.tabTitle, {color:color}]}>{title}</Text>
              </View>
        </TouchableOpacity>
    )
  }
}

const styles=StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 49,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',//透明
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabTitle: {
    fontSize: 12,
    color: 'black'
  }
})