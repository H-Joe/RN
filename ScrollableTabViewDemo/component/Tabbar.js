import React ,{ Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TabbarItem } from "./TabbarItem";

export class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.goToPage=this.props.goToPage;
    this.activeTab = this.props.activeTab;//可变
    this.tabs=this.props.tabs;
    this.names=this.props.names;
    this.icons=this.props.icons;
    this.activeIcons = this.props.activeIcons;
    this.activeTinColor=this.props.activeTinColor;
    this.tinColor=this.props.tinColor;
  }
  componentDidMount() {
    this.props.scrollValue.addListener(this.setAnimationValue);
  }
  setAnimationValue({value}) {
    // console.log(value);
  }
  render(){
    return(
      <View style={styles.container}>
        {this.tabs.map((tab, index) => {
          let focused = this.props.activeTab === index;
          let icon = focused ? this.activeIcons[index] : this.icons[index];
          let color = focused ? this.activeTinColor : this.tinColor;
          return <TabbarItem key={index} icon={icon} color={color} title={this.names[index]} goToPage={()=>this.goToPage(index)}/>;
        })}
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 49,
  }
})