import * as React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

import { connect, DispatchProp } from 'react-redux'
import { Button } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import { userLogout } from '../../modules/user/actions'

import * as D from '../../definitions'
import BoughtScreen from './BoughtScreen'
import OwnedScreen from './OwnedScreen'
import {showModal} from "../../modules/modal/actions";


export type ProfileProps<S> = DispatchProp<S> & {
  user: D.User
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 50,
    paddingLeft: 50,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: .1,
    shadowRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    alignSelf: 'center',
    fontSize: 18,
    marginLeft: 40,
  },
  button: {
    backgroundColor: '#FAE05E',
    borderRadius: 10,
    width: 300,
    marginTop: 50,
  },
})

class ProfileScreen extends React.Component<ProfileProps<object>, object> {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: '个人信息',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          {this.props.user.name? undefined : this.props.dispatch(showModal('signin')) }
          <Image
            style={styles.image}
            source={require('../../assets/avator.png')}
          />
          <Text style={styles.text}>
            {this.props.user.name}
          </Text>
        </View>
        <Button
          raised
          buttonStyle={styles.button}
          color="#000"
          title="已买宝贝"
          onPress={() => navigate('Bought')}
        />
        <Button
          raised
          buttonStyle={styles.button}
          color="#000"
          title="出售宝贝"
          onPress={() => navigate('Owned')}
        />
        <Button
          raised
          buttonStyle={styles.button}
          color="#000"
          title="退出登录"
          onPress={() => this.props.dispatch(userLogout())}
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
  },
  Owned: {
    screen: OwnedScreen
  }
}, {
  headerMode: 'none'
})
