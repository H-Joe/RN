'use strict'
import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { addNavigationHelpers } from 'react-navigation'
import { store } from "./Store/index";
import { addListener } from "./Store/redux";
import { Navigator } from "./Component/StackNavigator/index";

// const App = ({dispatch, nav, addListener})=>(
//   <Navigator navigation={addNavigationHelpers({dispatch, state: nav, addListener})}/>
// )
class App extends Component {
  render() {
    return (
    <Navigator 
     navigation = {addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener
        })
      }
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.navReducer
})
const AppWithNavigationState = connect(mapStateToProps)(App)

// export default InitApp = () => (
//   <Provider store={store}>
//     <AppWithNavigationState/>
//   </Provider>
// )
export default class InitApp extends Component{
  render(){
    return(
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}