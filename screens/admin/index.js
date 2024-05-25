import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Index from '..';
import Header from '../../components/Header';

const Tab = createBottomTabNavigator();

const AdminDashboard = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Index"
        component={({navigation}) => navigation.popToTop()}
      />
    </Tab.Navigator>
  );
};

export default AdminDashboard;