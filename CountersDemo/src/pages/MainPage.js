import React ,{ Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import * as counterAction from "../actions/counterAction";
import { NavigationActions } from "react-navigation";
import { Counter } from "../components/Counter";

// const popAction = NavigationActions.reset({
//   index: 0,
//   actions: [
//     NavigationActions.navigate({routeName: 'Login'})
//   ]
// })

class MainPage extends Component {
  static navigationOptions = {
    title: '主页',
  }
  render(){
    const {count, decrementFn, incrementFn} = this.props;
    return (
      <View style = {styles.container}>
      <Counter decrementFn={decrementFn} incrementFn={incrementFn} count={count}/>
      <TouchableOpacity onPress={this.logout.bind(this)} style={{marginTop: 50,}}>
        <View>
          <Text>退出登陆</Text>
        </View>
      </TouchableOpacity>
      </View>
    )
  }

  logout(){
    this.props.navigation.pop();
    // this.props.navigation.dispatch(popAction);
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5FCFF',
  }
})

export default connect(
  (state)=>({
    count: state.counter.count
  }),
  (dispatch)=>({
    incrementFn: ()=>dispatch(counterAction.increment()),
    decrementFn: ()=>dispatch(counterAction.decrement()),
  })
)(MainPage)