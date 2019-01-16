import { FONT_LOADED } from './types';

export function fontLoaded() {
    return {
      type: FONT_LOADED,
      payload: true
    };
  }

// export function loadFonts({ location }) {
//   return { type: LOAD_FONT, payload: location };
// }
