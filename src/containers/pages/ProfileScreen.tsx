import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { connect, DispatchProp } from 'react-redux'
import { Button } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';

import * as D from '../../definitions'
import BoughtScreen from "./BoughtScreen";

export type ProfileProps<S> = DispatchProp<S> & {
  user: D.User
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class ProfileScreen extends React.Component<ProfileProps<object>, object> {
  static navigationOptions = {
      title: '个人信息',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          title="已买宝贝"
          onPress={() => navigate('Bought')}
        />
      </View>
    )
  }
}

export default StackNavigator({
    Home: {
        screen: connect(
            state => ({
                user: state.user,
            })
        )(ProfileScreen)
    },
    Bought: {
        screen: BoughtScreen
    }
});
