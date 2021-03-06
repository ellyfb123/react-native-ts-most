import * as React from 'react'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import { userLogin } from '../../modules/user/actions'
import { TextInput, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

interface LoginProps {
    dispatch?: Redux.Dispatch<object>;
    referer?: string;
}

interface LoginState {
    username: string;
    password: string;
}

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
    }
});


class SigninScreen extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '请登录',
        headerLeft: <TouchableOpacity onPress={() => { navigation.goBack(); }}><Image
            style={{width: 20, height: 20, marginBottom: 5, marginLeft: 10}}
            source={require('../../assets/close.png')}
        /></TouchableOpacity>
    });


    handleLogin = (name, pass) => {
        const { dispatch, referer } = this.props;
        dispatch(userLogin(
            {
                username: name,
                password: pass
            },
            {
                referer: referer
            })
        );
    };

    handleChange = (key, value) => {
        this.setState({[key]: value});
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.main}>
                    <Image style={styles.image}
                           source={require('../../assets/avator.png')}
                    />
                    <View style={styles.content}>
                        <TextInput autoFocus
                                   autoCapitalize='none'
                                   style={styles.input}
                                   placeholder='用户名'
                                   clearButtonMode='while-editing'
                                   onChangeText={(text) => {this.handleChange('username', text)}}/>
                        <TextInput secureTextEntry
                                   autoCapitalize='none'
                                   style={styles.input}
                                   placeholder='密码'
                                   clearButtonMode='while-editing'
                                   onChangeText={(text) => {this.handleChange('password', text)}}/>
                        <Button
                            raised
                            buttonStyle={styles.button}
                            color="#000"
                            title="登录"
                            onPress={() => {
                                this.handleLogin(this.state.username, this.state.password)
                             }}
                        />
                        <Button
                            raised
                            buttonStyle={styles.button}
                            color="#000"
                            title="免费注册"
                            onPress={() => {
                                navigate('Signup')
                             }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default connect(
    state => ({
        user: state.user,
    })
)(SigninScreen)
