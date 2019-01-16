import { FONT_LOADED } from './types';

export function fontLoaded() {
    return { type: FONT_LOADED, payload: true }
  }
