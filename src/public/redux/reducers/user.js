import AsyncStorage from '@react-native-community/async-storage';
const initialState = {
    data: [],
    token: null,
    isLoading: false,
    isError: false,
    isFinish: false
};

export default (user = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isFinish: false
            }
        case 'AUTH_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isFinish: false
            }
        case 'AUTH_USER_FULLFILLED':
            AsyncStorage.setItem('token', action.payload.data.token);
            console.log(action.payload.data.token)
            return {
                ...state,
                isLoading: false,
                isError: false,
                isFinish: true,
                data: action.payload.data.data,
                token: action.payload.data.token
            }
        default:
            return state;
    }
});