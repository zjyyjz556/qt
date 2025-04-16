import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../page/HomeScreen_bifen'
import ProfileScreen from '../page/ProfileScreen_beifen'
import DatingAppHome from '../page/CeShi'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* 在这里添加底部导航栏的各个页面 */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Horizontal" component={DatingAppHome} />
        {/* 添加更多的页面 */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;