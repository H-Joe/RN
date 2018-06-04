import React ,{ Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import * as loginAction from "../actions/loginAction";
import { NavigationActions } from 'react-navigation';

// const resetAction = NavigationActions.reset({
//   index: 0,
//   actions: [
//     NavigationActions.navigate({ routeName: 'Main' })
//   ]
// })

class LoginPage extends Component {
    static navigationOptions = {
      title: '登陆',
    };
  shouldComponentUpdate(nextProps, nextState){
    if (nextProps.status === '登陆成功' && nextProps.isSuccess) {
      this.props.navigation.navigate('Main');
      // this.props.navigation.dispatch(resetAction);
      return false;
    }
    return true;
  }
  render(){
    const {login} = this.props;
    return(
      <View style={styles.container}>
        <Text>状态：{this.props.status}</Text>
        <TouchableOpacity onPress={()=>login()} style={{marginTop: 50,}}>
          <View style={styles.loginBtn}>
            <Text>登陆</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loginBtn: {
    padding: 5,
    borderWidth: 1,
  }
})

export default connect(
  (state) => ({
    status: state.loginIn.status,
    isSuccess: state.loginIn.isSuccess,
    user: state.loginIn.user
  }),
  (dispatch) => ({
    login: ()=>dispatch(loginAction.login()),
  })
)(LoginPage)