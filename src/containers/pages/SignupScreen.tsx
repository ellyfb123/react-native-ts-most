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
    secondPassword: string;
    registerButtonActive: boolean;
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
            secondPassword: '',
            registerButtonActive: false,
        }
    }

    handleUsernameChange = (username) => {
        this.setState({username: username});
        if (username && this.state.password && this.state.secondPassword) {
            this.setState({registerButtonActive: true});
        } else {
            this.setState({registerButtonActive: false});
        }
    };

    handlePasswordChange = (password) => {
        this.setState({password: password});
        if (this.state.username && password && this.state.secondPassword) {
            this.setState({registerButtonActive: true});
        } else {
            this.setState({registerButtonActive: false});
        }
    };

    handleSecondPasswordChange = (secondPass) => {
        this.setState({secondPassword: secondPass});
        if (this.state.username && this.state.password && secondPass) {
            this.setState({registerButtonActive: true});
        } else {
            this.setState({registerButtonActive: false});
        }
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
                                   onChangeText={(text) => {this.handleUsernameChange(text)}}/>
                        <TextInput autoCapitalize='none'
                                   style={styles.input}
                                   placeholder='密码'
                                   onChangeText={(text) => {this.handlePasswordChange(text)}}/>
                        <TextInput autoCapitalize='none'
                                   style={styles.input}
                                   placeholder='确认密码'
                                   onChangeText={(text) => {this.handleSecondPasswordChange(text)}}/>
                        <Button
                            raised
                            buttonStyle={styles.button}
                            color="#000"
                            title="注册"
                            disabled={!this.state.registerButtonActive}
                            onPress={
                                () => {
                                    this.handleSignup(this.state.username, this.state.password, this.state.secondPassword)
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
