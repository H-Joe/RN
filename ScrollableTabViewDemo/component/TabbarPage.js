import React ,{ Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ScrollableTabView ,{DefaultTabBar, } from "react-native-scrollable-tab-view";
import { Tabbar } from "./Tabbar";
import { Home } from "./HomePage";
import { Setting } from "./SettingPage";

export class TabbarPage extends Component {

  render(){
    const tabNames = ['首页', '设置'];
    const tabIcons = ['ios-home-outline', 'ios-settings-outline'];
    const activeTabIcons = ['ios-home', 'ios-settings'];
    return(
      <ScrollableTabView
      initialPage={0}
      tabBarPosition={'bottom'}
      renderTabBar={()=><Tabbar 
        names={tabNames} 
        icons={tabIcons} 
        activeIcons={activeTabIcons} 
        activeTinColor={'red'}/>}
      onChangeTab={(v)=>{}}
      >
          <Home tabLabel='home' />
          <Setting tabLabel='setting' />
      </ScrollableTabView>
    )
  }
}