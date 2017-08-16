import * as React from 'react'
import {View, StyleSheet} from "react-native";

const styles = StyleSheet.create({
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
});

class SignupScreen extends React.Component {
    static navigationOptions = {
        title: '注册',
    };
    render() {
        return (
            <View>

            </View>
        );
    }
}

export default SignupScreen;
