import * as React from 'react'
import {View, Button, Text} from "react-native";

class BoughtScreen extends React.Component {
    static navigationOptions = {
        title: '已买宝贝',
    };
    render() {
        return (
            <View>
                <Text>已买宝贝</Text>
            </View>
        );
    }
}

export default BoughtScreen;
