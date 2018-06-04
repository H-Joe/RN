import React ,{ Component  } from "react";
import { 
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
 } from "react-native";
/**
 在页面里面采用静态的方式配置 navigationOptions 中的属性，
 会覆盖 StackNavigator 构造函数中两个参数 RouteConfigs 和 StackNavigatorConfig 配置的 navigationOptions 里面的对应属性。
 navigationOptions 中属性的优先级是：
 页面中静态配置 > RouteConfigs > StackNavigatorConfig
 */
 export class HomePage extends Component {
   // 配置页面导航选项
   static navigationOptions = ({ navigation }) => ({
    //  title: 'HOME',
     headerTitle: 'HOME',
    //  titleStyle: { color: 'orange' },
     headerTitleStyle: { fontSize: 18, color: 'orange' },
     headerStyle: { height: 48, backgroundColor: 'cyan' },
   });
   render(){
     return(
       <View style={styles.container}>
         <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 30, }} onPress={this.skip.bind(this)}>
           <Text>点击跳转</Text>
         </TouchableOpacity>
       </View>
     )
   }
   skip(){
     this.props.navigation.navigate('Mine');
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
   }
 })