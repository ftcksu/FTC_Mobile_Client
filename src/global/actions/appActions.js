import { Linking, Alert } from 'react-native';


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

export function showNetworkErrorMessage(navigator){
    if(navigator != null ){
      Alert.alert(
        'مشكل كبير',
        'يا ان نتك خربان ولا سيرفرنا فاقع',
        [{text: 'جي جي' , onPress:() => navigator.pop() }]
        );
    }else
    Alert.alert(
      'مشكل',
      'والله مدري وش صار بس فيه مشكله، شيك على نتك يا باشا',
      [{text: 'جي جي'}]
      );
}

export function showMessage(title ='مشكل', body, buttonText='جي جي', navigator){
    if(navigator){
      Alert.alert(
        title,
        body,
        [{text: buttonText, onPress:() => navigator.pop()}]
        );
    }else{
      Alert.alert(
        title,
        body,
        [{text: buttonText}]
        );
    }
}



