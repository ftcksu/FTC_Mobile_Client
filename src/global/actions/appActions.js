import { Font } from 'expo';
import { FONT_LOADED } from './types';
import { Linking } from 'react-native';
import fonts from "../../../assets/fonts"
const whatsappApiURL = "https://wa.me/"

export function fontLoaded() {
  return (dispatch) => {
    Font.loadAsync({		
      'Cairo-Bold': fonts.CairoBold,
      'Cairo-SemiBold': fonts.CairoSemiBold,
      'Cairo-Light': fonts.CairoLight,
      'Cairo-Regular': fonts.CairoRegular,
      'Cairo-Black': fonts.CairoBlack,
      'Cairo-ExtraLight': fonts.CairoExtraLight,
    })
    .then(() => {
      dispatch({ type: FONT_LOADED, payload: true });
    });
  };
}

export function goToWhatsapp(phoneNumber) {
    Linking.openURL(whatsappApiURL+phoneNumber);
  }
