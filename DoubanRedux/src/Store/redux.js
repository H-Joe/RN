'use strict'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
  createNavigationPropConstructor
} from "react-navigation-redux-helpers";

export const navRedMiddware = createReactNavigationReduxMiddleware(
  'App',
  state => state.nav,
)
export const addListener = createReduxBoundAddListener('App')
export const navigationPropConstructor = createNavigationPropConstructor("App");