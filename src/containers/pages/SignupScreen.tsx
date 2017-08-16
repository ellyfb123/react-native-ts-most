import * as React from 'react'
import {View, StyleSheet, Image, Text, TextInput, TextInput} from "react-native";
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    },
    main: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    },
    image: {
        width: 100,
        height: 100,
        marginLeft: 5,
        marginRight: 15,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
    },
    input: {
        height: 30,
        width: 300,
        marginTop: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#D1D1D1',
        fontSize: 14,
    },
    button: {
        backgroundColor: '#FAE05E',
        borderRadius: 10,
        width: 300,
        marginTop: 50,
    },
});

interface SignupState {
    username: string;
    password: string;
    confirmedPassword: string;
}

class SignupScreen extends React.Component<{}, SignupState> {
    static navigationOptions = {
        title: '注册',
    };

    constructor() {
        super();
        this.state = {
            user: '',
            password: '',
            confirmedPassword: '',
        }
    }

    handleChange = (key, value) => {

    };

    handleSignup = (name, password, confirmedPassword) => {

    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.main}>
                    <Image style={styles.image}
                           source={require('../../assets/avator.png')}
                    />
                    <View style={styles.content}>
                        <TextInput autoCapitalize='none'
                                   style={styles.input}
                                   placeholder='用户名'
                                   onChangeText={(text) => {this.handleChange('username', text)}}/>
                        <TextInput autoCapitalize='none'
                                   style={styles.input}
                                   placeholder='密码'
                                   onChangeText={(text) => {this.handleChange('password', text)}}/>
                        <TextInput autoCapitalize='none'
                                   style={styles.input}
                                   placeholder='确认密码'
                                   onChangeText={(text) => {this.handleChange('confirmedPassword', text)}}/>
                        <Button
                            raised
                            buttonStyle={styles.button}
                            color="#000"
                            title="注册"
                            onPress={
                                () => {
                                    this.handleSignup(this.state.username, this.state.password, this.state.confirmedPassword)
                                }
                            }
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default SignupScreen;
