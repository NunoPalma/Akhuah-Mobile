import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import Search from '../screens/Search'
import Profile from '../screens/Profile'

import TabBar from '../components/TabBar'

const Tab = createBottomTabNavigator()

export default () => (
    <Tab.Navigator tabBar = {props=><TabBar {...props} /> }>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
);