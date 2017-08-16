import * as React from 'react'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import { userLogin } from '../../modules/user/actions'
import { Text, TextInput, View, Image, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'

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
        height: 40,
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
})

class LoginPage extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

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
    }

    handleSignUp = () => {
        const {dispatch} = this.props;
        dispatch(NavigationActions.navigate({ routeName: 'home' }))
    }

    handleChange = (key, value) => {
        this.setState({[key]: value});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>请登录</Text>
                <View style={styles.main}>
                    <Image style={styles.image}
                           source={require('../../assets/avator.png')}
                    />
                    <View style={styles.content}>
                        <TextInput autoCapitalize = 'none'
                                   style={styles.input}
                                   onChangeText={(text) => {this.handleChange('username', text)}}/>
                        <TextInput autoCapitalize = 'none'
                                   style={styles.input}
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
                                this.handleSignUp()
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
)(LoginPage);
