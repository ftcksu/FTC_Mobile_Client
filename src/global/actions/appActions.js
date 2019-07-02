import { Linking } from 'react-native';

const whatsappApiURL = "https://wa.me/"

export function goToWhatsapp(phoneNumber) {
    Linking.openURL(whatsappApiURL+phoneNumber);
  }

  export function goToSocialMedia(platform, userId) {
    let baseUrl;
    switch (platform) {
      case 'whatsapp':
        baseUrl=whatsappApiURL;
        break;
      case 'steam':
        baseUrl= 'http://steamcommunity.com/search/users/#text=';
        break;
      case 'twitter':
        baseUrl='https://twitter.com/';
        break;
      case 'linkedn':
        baseUrl = 'https://www.linkedin.com/in/';
        break;
      case 'snapchat':
        baseUrl = 'https://www.snapchat.com/add/';
        break;        
    }
    Linking.openURL(baseUrl+userId);
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

