import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { Avatar } from 'react-native-elements'

class HomeScreen extends Component {

    render() {
        return (
            <View style={{ margin: 20 }}>
                <View style={{ borderWidth: 2, borderRadius: 5, flexDirection: 'row', width: '100%', height: '45%', alignItems: 'center'}}>
                    <View style ={{flex: 1, alignItems: "center"}}>
                        <Avatar
                            rounded
                            size= 'large'
                            source={{uri: this.props.avatar}}
                        />
                    </View>
                    <View style={{flexDirection: 'column', flex: 2, marginLeft: 10}}>
                        <View>
                            <Text style = {{fontSize: 15}}>
                                <Text>purwanto </Text>-<Text> joko</Text>
                            </Text>
                            <Text style = {{fontSize: 15}}>male</Text>
                            <Text style = {{fontSize: 15}}>purko@mail.com</Text>
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
        height: '10%',
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
})

export default HomeScreen;