import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator,createStackNavigator ,createAppContainer, BottomTabBar } from 'react-navigation';
import { AddEvent, PointsListScreen, EventsScreen,MyProfile, History, EventDetailsScreen, ProfilePage, EditProfile, UserProfile } from './Screens'
import { TabIcon } from './components/local_components/Navigator/TabIcon'
import Images from '../assets/images'





/* Custom TabBar To Add TopBorder */
const TabBarComponent = (props) => {
  return (
    <View>
      <View style={{ 
          height: 4,
          width: '80%',
          backgroundColor: '#eee',
          alignSelf: 'center',
          marginTop: 10,
          // marginBottom: 10
        }}
      />
      <BottomTabBar {...props}/>
    </View>
  )
}

const homeStack = createStackNavigator(
  {
    Home: MyProfile,
    History: History,
  },
  {
    headerMode:'none'
  }
)
const eventStack = createStackNavigator(
  {
    Events: EventsScreen,
    AddEvent: AddEvent,
    EventDetails:EventDetailsScreen
  },
  {
    headerMode:'none',
  }
)

const pointsStack = createStackNavigator(
  {
    PointList: PointsListScreen,
    UserProfile: UserProfile
  },
  {
    headerMode:'none'
  }
)

const profileStack = createStackNavigator(
  {
    ProfilePage: ProfilePage,
    EditProfilePage: EditProfile,
    EventDetails:EventDetailsScreen
  },
  {
    headerMode:'none'
  }
)

/* Main Tab Navigator */
let Navigator = createBottomTabNavigator(
    /* Screens */ 
    {
      Profile: profileStack,
      PointList: pointsStack, 
      Events: eventStack,
      Home: homeStack,

    },

        /* Configuration */
    /* Warning: DO NOT PANIC */
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state
            let icon;

            switch (routeName) {
                case 'Home': 
                  icon = Images.homeIcon
                  break;
                case 'Events': 
                  icon = Images.eventsIcon
                  break;
                case 'Profile': 
                  icon = Images.profileIcon
                  break;
                case 'PointList': 
                  icon = Images.membersIcon
                  break;
                case 'Profile': 
                  icon = Images.profileIcon
                  break;

            }

            return <TabIcon src={icon} size={30} isFocused={focused} />
        },
      }),
      initialRouteName : 'Home',
      /* Magic, do not touch */
      tabBarComponent: TabBarComponent,

      tabBarOptions: {
        showLabel: false,
        style: { 
          height: 70,
          borderTopWidth: 0,
        }
      }
    }
  )
 
export default Navigator = createAppContainer(Navigator)