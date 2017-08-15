import * as React from 'react'
import { Text, FlatList, View, Image, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation';
import { connect, DispatchProp } from 'react-redux'
import { getProducts } from '../../modules/product/actions'

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
        const { products } = this.props;
        return (
            <View>
                <ScrollL
                    data={products}
                    renderItem={({item}) =>
                    <View style={styles.container}>
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
                    </View>}
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
});
