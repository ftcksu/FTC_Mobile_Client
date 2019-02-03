import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import AddEventsReducer from './AddEventsReducer'

export default combineReducers({
    appReducer: AppReducer,
    addEvents: AddEventsReducer,
});
