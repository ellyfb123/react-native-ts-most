import * as React from 'react'
import { Text, FlatList, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { connect, DispatchProp } from 'react-redux'
import { getBoughtProducts } from '../../modules/product/actions'

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
    },
    mask: {
        position: 'absolute',
        width: 400,
        height: 140,
        backgroundColor: '#FCFAFA',
        opacity: 0.8,
    }
})

class BoughtScreen extends React.Component<DispatchProp<{}>, {}> {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "已买宝贝",
        headerLeft: <TouchableOpacity onPress={() => { navigation.goBack(); }}><Image
            style={{width: 20, height: 20, marginBottom: 5, marginLeft: 10}}
            source={require('../../assets/arrow.png')}
        /></TouchableOpacity>
    });

    componentDidMount() {
        this.props.dispatch(getBoughtProducts());
    }

    keyExtractor = (item, index) => index;

    render() {
        const { products } = this.props;
        return (
            <View>
                <FlatList
                    data={products}
                    keyExtractor={this.keyExtractor}
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
                        </View>
                    </View>}
                />
            </View>
        );
    }
}

export default connect(
    state => ({
        products: state.products.bought,
    })
)(BoughtScreen);
