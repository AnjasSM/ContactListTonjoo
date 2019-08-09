import React, { Component } from 'react'

import { View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

class AuthLoading extends Component {

	constructor(props) {
	  	super(props);
	  	this.isLogin()
	}

	isLogin = async () => {
		await AsyncStorage.getItem('token', (error, result) => {
			if (result) {
                this.props.navigation.navigate('AppStack')
			} else {
				this.props.navigation.navigate('AuthStack')
			}
		})
	}

	render() {
		return (
			<View style={{
				flex: 1,
				backgroundColor: '#F5F5F5',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<ActivityIndicator size="large" color='#ff9500' />
			</View>
		)
	}
}

export default AuthLoading