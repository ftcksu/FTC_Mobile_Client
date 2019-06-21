import { Font } from 'expo';
import { FONT_LOADED } from './types';
import { Linking } from 'react-native';
const whatsappApiURL = "https://wa.me/"


export function goToWhatsapp(phoneNumber) {
    Linking.openURL(whatsappApiURL+phoneNumber);
  }

export function pointListAdapter(list, type){
  let newList = list.map(element => {
    if(type == 1){
      element.user.points = element.user.total_points
    }
    else{
      element.user.points = element.user.weekly_points
    }
    return element
  })
  let sortedList = newList.sort(function(a, b) { return b.user.points - a.user.points; });

  return sortedList

}
