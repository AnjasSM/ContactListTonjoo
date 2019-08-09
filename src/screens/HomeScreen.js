import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,
    RefreshControl
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Avatar } from 'react-native-elements'
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchContact } from '../public/redux/actions';
import Card from '../components/Card';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        }
    }

    componentDidMount = () => {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            if (value !== null) {
                this.props.dispatch(fetchContact(token));
            }
        } catch (e) {
            console.warn('token is null')
        }
    }

    _onRefresh = async () => {
        await this.setState({ refreshing: true })
        await this.fetchData()
        await this.setState({ refreshing: false })
    }

    _keyExtractor = (item, index) => item.id.toString();

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                {/* <ScrollView
                >
                    <View>
                        <FlatList
                            data={this.props.contact.data}
                            keyExtractor={this._keyExtractor}
                            renderItem={
                                ({ item, index }) => (
                                    <Card
                                        avatar={item.avatar}
                                        firstName={item.first_name}
                                        lastName={item.last_name}
                                        gender={item.gender}
                                        email={item.email}
                                    />
                                )
                            }
                        />
                    </View>
                </ScrollView> */}
                <Card />
            </View>
        )
    }
}

// const styles = StyleSheet.create({
//     header: {
//         position: "absolute",
//         width: '100%',
//         height: '10%',
//         backgroundColor: '#ffffff',
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//     },
// })

const mapStateToProps = state => {
    return {
        data: state.contact.data
    }
}

export default connect(mapStateToProps)(HomeScreen);