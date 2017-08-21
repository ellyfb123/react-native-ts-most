import * as React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { connect, DispatchProp } from 'react-redux'
import {StackNavigator} from 'react-navigation'
import { buyProduct } from '../../modules/product/actions'
import SigninScreen from './SigninScreen'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginRight: 20,
        marginLeft: 100,
        height: 50,
    },
    image: {
        width: 250,
        height: 250,
    },
    button: {
        backgroundColor: '#FAE05E',
        borderRadius: 10,
        width: 300,
        marginTop: 50,
    },
    name: {
        width: 100,
        height: 50,
    },
    priceAndUser: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: 150,
        height: 50,
    },
})

class BuyScreen extends React.Component<DispatchProp<{}>, {}> {
    static navigationOptions = {
        title: '商品详情',
    };
    constructor(props) {
        super(props);
    }

    handleClick = (productId) => {
        const { user, dispatch, navigate } = this.props;
        if (user.name) {
            dispatch(buyProduct(productId));
        } else {
            navigate('Signin');
        }
    }

    render() {
        const {state} = this.props.navigation;
        var item = state.params ? state.params.item : "undefined";
        return (
            <View style={styles.container}>
                <Text>商品详情</Text>
                <Image style={styles.image} source={{uri:item.img}}/>
                <View style={styles.content}>
                    <Text style={styles.name}> {item.name} </Text>
                    <View style={styles.priceAndUser}>
                        <Text>{item.price}</Text>
                        <Text> {item.owner.username} </Text>
                    </View>
                </View>
                <Text> {item.description} </Text>
                <View>
                    <Button
                        raised
                        buttonStyle={styles.button}
                        color="#000"
                        title="立即购买"
                        onPress={() => this.handleClick(item.objectId)}
                    />
                </View>

            </View>
        );
    }
}

export default connect(
    state => ({
        user: state.user,
    })
)(BuyScreen)
