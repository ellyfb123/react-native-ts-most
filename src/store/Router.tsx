import * as React from 'react'
import {
  NavigationActions,
  TabNavigator,
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../containers/pages/HomeScreen'
import UploadScreen from '../containers/pages/UploadScreen'
import ProfileScreen from '../containers/pages/ProfileScreen'
import SigninScreen from '../containers/pages/SigninScreen'

const Route = TabNavigator(
  {
    home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    upload: {
      screen: UploadScreen,
      navigationOptions: {
        tabBarLabel: 'Upload',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-add' : 'ios-add-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-person' : 'ios-person-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    signin: {
      screen: SigninScreen,
      navigationOptions: {
          tabBarLabel: 'Signin',
          tabBarIcon: ({ tintColor, focused }) => (
              <Ionicons
                  name={focused ? 'ios-person' : 'ios-person-outline'}
                  size={26}
                  style={{ color: tintColor }}
              />
          ),
      },
    },
  },
  {
    initialRouteName: 'home',
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    lazy: true,
    tabBarOptions: {
      activeBackgroundColor: '#ffffff',
      inactiveBackgroundColor: '#ffd746'
    },
  }
);

const initialRouterAction = NavigationActions.init()

const initialState = Route.router.getStateForAction(initialRouterAction, null)

export const reducer = (state = initialState, action) => {
  let nextState
  // Simply return the original `state` if `nextState` is null or undefined.
  switch (action.type) {

    default:
      nextState = Route.router.getStateForAction(action, state)
  }
  return nextState || state
}

export default Route
