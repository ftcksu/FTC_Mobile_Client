import { CHANGE_TEXT } from '../actions/types';

const INITIAL_STATE = { 
    query: '',
 };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_TEXT:
            return {
                query: action.payload,
            };
        default:
            return { state };
    }
}
