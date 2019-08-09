import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class Header extends Component {

    logoutHandler = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
      };

    render() {
        return (
            <View style={{flex:0.15, backgroundColor: 'red'}}>
            <View style={styles.header}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}><Text></Text></View>
                    <View style={{ flex: 1, alignSelf: 'center' }}><Text style={{ fontSize: 20 }}>Contact List</Text></View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity style={styles.logoutBtn} onPress={this.logoutHandler}>
                            <Text>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        position: "absolute",
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    logoutBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        margin: 10,
        height: '50%',
        width: '60%',
        borderRadius: 4
    }
})

export default Header;