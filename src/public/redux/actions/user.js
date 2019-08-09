import axios from 'axios';

const url = 'https://devel-7.tonjoostudio.com/recruitment-api/authenticate';

export const authUser = data => {
    return {
        type: 'AUTH_USER',
        payload: axios.post(url, data)
    }
}