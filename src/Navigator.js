import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator,createStackNavigator ,createAppContainer, BottomTabBar } from 'react-navigation';
import { AddEvent, PointsListScreen, EventsScreen,MyProfile, History, EventDetailsScreen } from './Screens'
import { TabIcon } from './components/TabIcon'
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
      <BottomTabBar {...props} />
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
    headerMode:'none'
  }
)

/* Main Tab Navigator */
let Navigator = createBottomTabNavigator(
    /* Screens */ 
    {
      Home: homeStack,
      Members: PointsListScreen, //PointsListScreen
      Events: eventStack,
      /* Profile: ???? */
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
                case 'Members': 
                  icon = Images.membersIcon
                  break;
                case 'Profile': 
                  icon = Images.profileIcon
                  break;

            }

            return <TabIcon src={icon} size={30} isFocused={focused} />
        },
      }),

      /* Magic, do not touch */
      tabBarComponent: TabBarComponent,

      tabBarOptions: {
        showLabel: false,
        style: { 
          height: 70,
          borderTopWidth: 0,
          // paddingBottom: 15
        }
      }
    }
  )
 
export default Navigator = createAppContainer(Navigator)