'use strict'
import { NavigationActions } from "react-navigation";
import { Navigator } from "../../Component/StackNavigator/index";

const initialState = Navigator.router.getStateForAction(NavigationActions.init());

export const navReducer = (state, actions) => {
  const nextState = Navigator.router.getStateForAction(actions, state);
  return nextState || state;
}