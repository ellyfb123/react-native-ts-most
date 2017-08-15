import * as React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

import { connect, DispatchProp } from 'react-redux'
import Button from 'apsl-react-native-button'
import { StackNavigator } from 'react-navigation'

import * as D from '../../definitions'
import BoughtScreen from './BoughtScreen'

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
  button: {
    height: 40,
    alignSelf: 'stretch',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 50,
    borderWidth: 0,
    backgroundColor: 'rgba(251, 226, 81, 1)',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
})

class ProfileScreen extends React.Component<ProfileProps<object>, object> {
  static navigationOptions = {
    title: '个人信息',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/logo.png')}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              marginLeft: 40,
            }}
          >曾磊
          </Text>
        </View>
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={() => navigate('Bought')}
        >已买宝贝
        </Button>
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={() => navigate('Bought')}
        >出售宝贝
        </Button>
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={() => navigate('Bought')}
        >退出登录
        </Button>
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
})
