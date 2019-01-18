import { FONT_LOADED } from '../actions/types';

const INITIAL_STATE = { fontHasLoaded: false };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FONT_LOADED:
            return {
                fontHasLoaded: action.payload,
            };
        default:
            return { state };
    }
}
