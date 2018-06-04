import React ,{ Component  } from "react";
import { 
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
 } from "react-native";

 export class HomePage extends Component {
   static navigationOptions = {
     headerTitle: '首页-详情',
    //  drawerIcon: ({tintColor}) => (
    //    <Image source={{uri: 'tabbar_home'}}
    //     style={{tintColor: tintColor}}/>
    //  )
   }
   render(){
     return(
       <View style={styles.container}>
         <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 30, }} onPress={this.skip.bind(this)}>
           <Text>点击返回</Text>
         </TouchableOpacity>
       </View>
     )
   }
   skip(){
     this.props.navigation.goBack();
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
   }
 })