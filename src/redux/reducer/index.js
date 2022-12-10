import logIn_Reducer from './LogInReducer';
import {combineReducers} from 'redux';

const reducer =  combineReducers({
    login:logIn_Reducer
})

export default reducer;