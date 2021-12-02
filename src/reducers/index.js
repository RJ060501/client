import { combineReducers } from 'redux';
import { Form, Field } from 'react-final-form';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer
});