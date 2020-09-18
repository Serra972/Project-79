import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Exchange from '../screens/exchange';
import List from '../screens/list';

export const BottomTabNavigator = createBottomTabNavigator({
  List: {
    screen: List,
    navigationOptions :{
      tabBarLabel : "Home Screen",
    }
  },
  Exchange : {
    screen: Exchange,
    navigationOptions :{
      tabBarLabel : "Exchange Screen",
    }
  }
});