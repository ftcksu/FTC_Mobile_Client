import { FONT_LOADED } from '../actions/types';

const INITIAL_STATE = { fontLoaded: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FONT_LOADED:
            return Object.assign({}, state, {
                visibilityFilter: action.payload,
            })
        default:
            return state;
    }
};
