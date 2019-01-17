import { FONT_LOADED } from './types';
import { Font } from 'expo';

export function fontLoaded() {
  return (dispatch) => {
    Font.loadAsync({		
      'Cairo-Bold': require('../../assets/fonts/Cairo-Bold.ttf'),
      'Cairo-SemiBold': require('../../assets/fonts/Cairo-SemiBold.ttf'),
      'Cairo-Light': require('../../assets/fonts/Cairo-Light.ttf'),
      'Cairo-Regular': require('../../assets/fonts/Cairo-Regular.ttf'),
      'Cairo-Black': require('../../assets/fonts/Cairo-Black.ttf'),
      'Cairo-ExtraLight': require('../../assets/fonts/Cairo-ExtraLight.ttf'),
    })
    .then(() => {
      dispatch({ type: FONT_LOADED, payload: true });
    })
  }
}
// export function loadFonts({ location }) {
//   return { type: LOAD_FONT, payload: location };
// }
