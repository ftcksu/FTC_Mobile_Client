import { FONT_LOADED } from '../actions/types';
// import { Font } from 'expo';

const INITIAL_STATE = { fontHasLoaded: false };

export default function (state = INITIAL_STATE, action) {
    // console.log(action.type)
    // console.log(FONT_LOADED===action.type)
    // console.log(action.type)
    switch (action.type) {
        case FONT_LOADED:
            return {
                fontHasLoaded: action.payload,
            };
        default:
            return { state };
    }
}
