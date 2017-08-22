import * as React from 'react'
import { Text, FlatList, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { connect, DispatchProp } from 'react-redux'
import { getProducts } from '../../modules/product/actions'
import { StackNavigator } from 'react-navigation'
import BuyScreen from './BuyScreen'

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
    static navigationOptions = {
        title: '精选',
    };

    componentDidMount() {
        this.props.dispatch(getProducts());
    }
    render() {
        const { products, dispatch } = this.props;
        const { navigate } = this.props.navigation;
        return (
            <View>
                <FlatList
                    data={products}
                    renderItem={({item}) =>
                    <TouchableOpacity style={styles.container} onPress={() => navigate('Buy', {item: item})}>
                        <Image style={styles.image}
                              source={{uri: item.img}}
                         />
                        <View style={styles.content}>
                            <Text>{item.name}</Text>
                            <Text>&#165; {item.price}</Text>
                            <View>
                                  <Text>{item.owner.username}</Text>
                            </View>
                            <Text>&nbsp;</Text>
                        </View>
                    </TouchableOpacity>}
                />
            </View>
        );
    }
}

export default StackNavigator({
    Home: {
        screen: connect(
            state => ({
                products: state.products.available,
            })
        )(HomeScreen)
    },
    Buy: {
        screen: BuyScreen
    },
}, {
    headerMode: 'none'
})
