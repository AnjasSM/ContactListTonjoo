import axios from 'axios';

export const fetchContact = token => {
    return {
        type: 'FETCH_CONTACT',
        payload: axios.get(`https://devel-7.tonjoostudio.com/recruitment-api/contacts?token=${token}`)
    }
}

// export const addContact = (token, data) => {
//     return {
//         type: 'ADD_CONTACT',
//         payload: axios.post(`${get}${token}`, data )
//     }
// }