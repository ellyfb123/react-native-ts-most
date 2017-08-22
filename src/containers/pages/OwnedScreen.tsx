import * as React from 'react'
import { Text, FlatList, View, Image, StyleSheet } from 'react-native'
import { connect, DispatchProp } from 'react-redux'
import { getOwnedProducts } from '../../modules/product/actions'

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

class OwnedScreen extends React.Component<DispatchProp<{}>, {}> {
    static navigationOptions = {
        title: '出售宝贝',
    };

    componentDidMount() {
        this.props.dispatch(getOwnedProducts());
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
                                  <Text>{item.buyer ? item.buyer.username : ''}</Text>
                            </View>
                            <Text>{ item.buyer? '交易关闭' : '出售中'}</Text>
                        </View>
                        { item.buyer? <Text style={styles.mask}>&nbsp;</Text> : undefined}
                    </View>}
                />
            </View>
        );
    }
}

export default connect(
    state => ({
        products: state.products.owned,
    })
)(OwnedScreen);
