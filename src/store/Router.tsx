import * as React from 'react'
import {
  NavigationActions,
  TabNavigator,
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../containers/pages/HomeScreen'
import OthersScreen from '../containers/pages/OthersScreen'
import ProfileScreen from '../containers/pages/ProfileScreen'
import SigninScreen from '../containers/pages/SigninScreen'

const Route = TabNavigator({
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
  others: {
    screen: OthersScreen,
    navigationOptions: {
      tabBarLabel: 'Others',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
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
          name={focused ? 'ios-apps' : 'ios-apps-outline'}
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
              name={focused ? 'ios-apps' : 'ios-apps-outline'}
              size={26}
              style={{ color: tintColor }}
          />
      ),
    },
  },
},                         {
  initialRouteName: 'signin',
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
})

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