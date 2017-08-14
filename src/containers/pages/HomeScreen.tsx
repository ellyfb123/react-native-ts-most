import * as React from 'react'
import { Text, FlatList, View, Image, StyleSheet } from 'react-native'
import { connect, DispatchProp } from 'react-redux'

const styles = StyleSheet.create({
    container: {
        height: 140,
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
    },
    image: {
        width: 150,
        marginLeft: 5,
        marginRight: 15,
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    }
})

class HomeScreen extends React.Component<DispatchProp<{}>, {}> {
    constructor() {
        super();
        this.state = {
            resourceData: [
                {key: '1', image: 'Devin', name: 'test1', price: '40', username: 'testuser'},
                {key: '2', image: 'DevJuliein', name: 'test1', price: '40', username: 'testuser'},
                {key: '3', image: 'Jillian', name: 'test1', price: '40', username: 'testuser'},
                {key: '4', image: 'Devin', name: 'test1', price: '40', username: 'testuser'},
                {key: '5', image: 'DevJuliein', name: 'test1', price: '40', username: 'testuser'},
                {key: '6', image: 'Jimmy', name: 'test1', price: '40', username: 'testuser'},
                {key: '7', image: 'Devin', name: 'test1', price: '40', username: 'testuser'},
                {key: '8', image: 'Jimmy', name: 'test1', price: '40', username: 'testuser'},
            ]
        }
    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.state.resourceData}
                    renderItem={({item}) =>
                    <View style={styles.container}>
                        <Image style={styles.image}
                              source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                         />
                        <View style={styles.content}>
                            <Text>{item.name}</Text>
                            <Text>&#165; {item.price}</Text>
                            <View>
                                  <Text>{item.username}</Text>
                            </View>
                            <Text>&nbsp;</Text>
                        </View>
                    </View>}
                />
            </View>
        );
    }
}

export default connect()(HomeScreen)