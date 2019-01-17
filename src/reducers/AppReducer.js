import { FONT_LOADED } from '../actions/types';
import { Font } from 'expo';

const INITIAL_STATE = { fontHasLoaded: false };

export default async function (state = INITIAL_STATE, action) {
    // console.log(action.type)
    // console.log(FONT_LOADED===action.type)
    // console.log(action.type)
    switch (action.type) {
        case FONT_LOADED:
            await Font.loadAsync({
                'Cairo-Bold': require('../../assets/fonts/Cairo-Bold.ttf'),
                'Cairo-SemiBold': require('../../assets/fonts/Cairo-SemiBold.ttf'),
                'Cairo-Light': require('../../assets/fonts/Cairo-Light.ttf'),
                'Cairo-Regular': require('../../assets/fonts/Cairo-Regular.ttf'),
                'Cairo-Black': require('../../assets/fonts/Cairo-Black.ttf'),
                'Cairo-ExtraLight': require('../../assets/fonts/Cairo-ExtraLight.ttf'),
            });
            return {
                fontHasLoaded: action.type,
            };
        default:
            return { state };
    }
};
