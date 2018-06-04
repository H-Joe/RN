import React, { Component } from "react";
import { 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
 } from "react-native";
 import { Navigator } from "react-native-deprecated-custom-components";

 class FirstViewController extends Component {
   constructor(props) {
     super(props);
     this.state ={
       content: '',
       fromSecondVCInfo: null
     }
   }
   _onInputValueChanged (inputValue) {
     this.setState({content: inputValue})
   }
   _pressPush () {
     let _this = this;
     var nextRoute = {
       comp: SencondViewController,
       passProps: {
         showText: this.state.content,
         getInfo(info){
          _this.setState({fromSecondVCInfo: info})
         }
       }
     }
    this.props.navigator.push(nextRoute)
   }
   render (){
    return (
      <View style={[styles.flex, { backgroundColor: 'cyan', }]}>
        <TextInput 
          style={styles.input}
          placeholder={'请输入'}
          onChangeText={this._onInputValueChanged.bind(this)}/>
        <TouchableOpacity style={styles.btn} onPress={() => this._pressPush()}>
          <Text>push到下一页面</Text>
        </TouchableOpacity>
        <Text style={[styles.showText, {backgroundColor: 'yellow',}]}>{this.state.fromSecondVCInfo}</Text>
      </View>
    )
   }
 }
 class SencondViewController extends Component {
   _pressPop () {
     if (this.props.getInfo) {
       this.props.getInfo(this.props.showText + '  callBack');
     }
    this.props.navigator.pop();
   }
   render () {
    return (
      <View style={[styles.flex, { backgroundColor: 'yellow', }]}>
        <Text style={styles.showText}>{this.props.showText}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => this._pressPop()}>
          <Text>返回上一页面</Text>
        </TouchableOpacity>
      </View>
    )
   }
 }
 export class MyNavigator extends Component {
   render (){
     var rootRoute = {
       comp: FirstViewController,
       // 值传递
       passProps:{}
     }
     return (
       <Navigator
        initialRoute={rootRoute}
        configureScene={(route)=>{
            return Navigator.SceneConfigs.PushFromRight;
        }}
        renderScene={(route, navigator)=> {
          var Component = route.comp;
          return (
            <Component 
              navigator={navigator} 
              route={route}
              {...route.passProps}/>
          )
        }}
        />
     );
   }
 }

 const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: 150,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems:'center'
  },
  input: {
    height: 45,
    margin: 25,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
  },
  showText: {
    margin: 25,
    padding: 25,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'cyan',
  }

 });