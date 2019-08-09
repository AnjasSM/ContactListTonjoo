import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import AuthLoading from '../screens/AuthLoading';
import Login from '../screens/LoginScreen';
import Home from '../screens/HomeScreen';

const AppStack = createStackNavigator({
    Home: { screen: Home }
},
    {
        headerMode: 'none'
    }
)

const AuthStack = createStackNavigator({
    Login: Login
},
    {
        headerMode: 'none'
    }
)

const swicthNavigator = createSwitchNavigator({
    AuthLoading: AuthLoading,
    AuthStack: AuthStack,
    AppStack: AppStack
},
    {
        initialRouteName: 'AuthLoading'
    }
)

const AppContainer = createAppContainer(swicthNavigator)
export default AppContainer
