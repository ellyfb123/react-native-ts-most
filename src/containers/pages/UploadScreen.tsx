import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect, DispatchProp } from 'react-redux'
import {StackNavigator} from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class UploadScreen extends React.Component<DispatchProp<{}>, {}> {
    static navigationOptions = {
        title: '发布宝贝',
    };
  render() {
    return (
      <View style={styles.container}>
        <Text>发布宝贝</Text>
      </View>
    )
  }
}

export default StackNavigator({
    Home: {
        screen: connect()(UploadScreen)
    },
});
