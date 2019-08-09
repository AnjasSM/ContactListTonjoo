import { combineReducers } from 'redux';

import user from './user';
import contact from './contact';

const appReducer = combineReducers({
    user,
    contact
});

export default appReducer;