import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { Font } from 'expo'
import PointList from './src/components/PointList'


const content = [
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':9999,
      'position':1
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':990,
      'position':2
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':980,
      'position':3
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':970,
      'position':4
    },{
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':980,
      'position':3
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':970,
      'position':4
    },{
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':980,
      'position':3
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':970,
      'position':4
    },{
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':980,
      'position':3
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':970,
      'position':4
    },{
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':980,
      'position':3
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':970,
      'position':4
    },{
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':980,
      'position':3
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':970,
      'position':4
    },{
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':980,
      'position':3
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':970,
      'position':4
    },{
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':980,
      'position':3
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':970,
      'position':4
    },{
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':980,
      'position':3
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':970,
      'position':4
    },{
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':980,
      'position':3
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':970,
      'position':4
    },{
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':980,
      'position':3
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':970,
      'position':4
    },{
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':980,
      'position':3
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':970,
      'position':4
    },{
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':980,
      'position':3
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':970,
      'position':4
    },{
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':980,
      'position':3
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':970,
      'position':4
    },{
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':980,
      'position':3
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':970,
      'position':4
    },{
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':980,
      'position':3
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':970,
      'position':4
    },{
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':980,
      'position':3
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':970,
      'position':4
    },
  ]

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }
  

  async componentDidMount() {
    await Font.loadAsync({
      'Cairo-Bold': require('./assets/fonts/Cairo-Bold.ttf'),
      'Cairo-SemiBold': require('./assets/fonts/Cairo-SemiBold.ttf'),
      'Cairo-Light': require('./assets/fonts/Cairo-Light.ttf'),
      'Cairo-Regular': require('./assets/fonts/Cairo-Regular.ttf'),
      'Cairo-Black': require('./assets/fonts/Cairo-Black.ttf'),
      'Cairo-ExtraLight': require('./assets/fonts/Cairo-ExtraLight.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      
        this.state.fontLoaded ? <View style={styles.container}>

        <PointList data={content} />
        
      </View>:null
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    justifyContent: 'center',
    flexDirection:'column',
  },
  flatView:{
    flexGrow:0
  }
});
