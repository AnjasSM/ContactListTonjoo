import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { authUser } from '../public/redux/actions';

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            errUsername: '',
            password: '',
            errPassword: '',
            errAuth: false,
            isLoading: false
        };
    }

    usernameChange = async (input) => {
        await this.setState({
            username: input,
        })
        if (this.state.username.length < 6) {
            this.setState({
                errUsername: 'username should be at least 6 characters',
            })
        } else {
            this.setState({
                errUsername: false,
            })
        }
    }

    passwordChange = async (input) => {
        await this.setState({
            password: input,
        })
        if (this.state.password.length < 6) {
            this.setState({
                errPassword: 'Password should be at least 6 characters',
            })
        } else {
            this.setState({
                errPassword: false,
            })
        }
    }

    validate = () => {
        if (this.state.errUsername === false && this.state.errPassword == false) {
            console.warn('masuk ke login Handler');
            this.loginHandler();
        }
    };

    loginHandler = async () => {
        this.setState({
            isLoading: true
        })
        let { username, password } = this.state;
        let data = {
            'username': username,
            'password': password
        };
        console.warn(`cek dat-----${data}`)
        await this.props.dispatch(authUser(data))
            .then(success => {
                this.props.navigation.navigate('AuthLoading');
                this.setState({
                    isLoading: false
                })
            })
            .catch(err => {
                this.setState({ errAuth: true });
                console.warn('masuk catch', err)
            });
    };

    renderError = () => {
        if (this.state.errAuth) {
            alert('Authentication failed');
            this.setState({
                errAuth: false,
                isLoading: false
            });
        }
    };

    render() {
        this.renderError();
        return (
            <View style={styles.container}>
                <View style={{ flex: 0.5 }}>
                    <View style={{ alignItems: 'center', margin: 20 }}><Text style={{ fontSize: 20 }}>Tonjoo Test</Text></View>
                </View>
                <View style={{ flex: 1.5 }}>
                    <SafeAreaView>
                        <ScrollView>
                            <View>
                                <View style={{ justifyContent: 'center', margin: 20 }}>
                                    <View>
                                        <View>
                                            <Text>
                                                Username
                                            </Text>
                                            <Text style={styles.errText}>
                                                {this.state.errUsername}
                                            </Text>
                                        </View>
                                        <View>
                                            <TextInput
                                                placeholder='Input Username'
                                                style={styles.textInput}
                                                value={this.state.username}
                                                onChangeText={this.usernameChange}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ marginTop: 10 }}>
                                        <View>
                                            <Text>
                                                Password
                                            </Text>
                                            <Text style={styles.errText}>
                                                {this.state.errPassword}
                                            </Text>
                                        </View>
                                        <View>
                                            <TextInput
                                                placeholder='Input Password'
                                                style={styles.textInput}
                                                value={this.state.password}
                                                onChangeText={this.passwordChange}
                                                secureTextEntry={true}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ margin: 20 }}>
                                {
                                    this.state.errUsername === false && this.state.errPassword === false ?
                                        <TouchableOpacity style={styles.button} onPress={this.validate}>
                                            {this.state.isLoading === true ? <ActivityIndicator size='small' color='#ff9500' /> : <Text style={{ textAlign: 'center' }}>Login</Text>}
                                        </TouchableOpacity> :
                                        <TouchableOpacity style={[styles.button, {borderColor: '#9c9b9a'}]} onPress={this.validate} disabled={true}>
                                            {this.state.isLoading === true ? <ActivityIndicator size='small' color='#ff9500' /> : <Text style={{ textAlign: 'center', color: '#9c9b9a' }}>Login</Text>}
                                        </TouchableOpacity>
                                }

                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    errText: {
        color: 'red',
        left: 10
    },
    textInput: {
        borderWidth: 1,
        height: 40,
        borderRadius: 5
    },
    button: {
        borderWidth: 1,
        borderRadius: 5,
        width: '40%',
        height: '40%',
        alignSelf: 'center',
        justifyContent: 'center'
    }
})

const mapStateToProps = state => {
    return {
        data: state.user.data,
        token: state.user.token
    }
}

export default connect(mapStateToProps)(LoginScreen);